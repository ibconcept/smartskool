const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const submitButton = document.getElementById('submitButton');
const clearButton = document.getElementById('clearButton');
const output = document.getElementById('output');
const feedbackIcon = document.getElementById('feedbackIcon');
const feedbackText = document.getElementById('feedbackText');

let drawing = false;
let lastX, lastY;

canvas.addEventListener('mousedown', (e) => {
    drawing = true;
    lastX = e.offsetX;
    lastY = e.offsetY;
});

canvas.addEventListener('mousemove', (e) => {
    if (drawing) {
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
        lastX = e.offsetX;
        lastY = e.offsetY;
    }
});

canvas.addEventListener('mouseup', () => {
    drawing = false;
});

clearButton.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    feedbackIcon.innerHTML = '';
    feedbackText.textContent = 'Draw something above and click submit.';
});

submitButton.addEventListener('click', async () => {
    const imageData = canvas.toDataURL('image/png').split(',')[1];

    try {
        const response = await fetch('/analyze', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ image: imageData })
        });
        const result = await response.json();
        const text = result.responses[0].textAnnotations[0].description.trim();

        // Example expected answer (change this as needed)
        const expectedText = 'A'; 

        if (text === expectedText) {
            feedbackIcon.innerHTML = '✔';
            feedbackIcon.className = 'correct';
            feedbackText.textContent = `Correct! You drew: ${text}`;
        } else {
            feedbackIcon.innerHTML = '✘';
            feedbackIcon.className = 'incorrect';
            feedbackText.textContent = `Incorrect. You drew: ${text}`;
        }
    } catch (error) {
        feedbackIcon.innerHTML = '✘';
        feedbackIcon.className = 'incorrect';
        feedbackText.textContent = 'Error processing image.';
    }
});