const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const submitButton = document.getElementById('submitButton');
const clearButton = document.getElementById('clearButton');
const output = document.getElementById('output');

// Initialize the ml5 image classifier with a pre-trained model
let classifier;
const modelURL = 'https://teachablemachine.withgoogle.com/models/YOUR_MODEL_URL/model.json'; // Replace with your model URL

function setup() {
    classifier = ml5.imageClassifier(modelURL, modelLoaded);
}

function modelLoaded() {
    console.log('Model Loaded!');
}

// Drawing logic
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

// Clear button functionality
clearButton.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    output.textContent = 'Draw something above and click ENTER.';
});

// Submit button functionality with ml5.js
submitButton.addEventListener('click', () => {
    // Create a temporary smaller canvas
    const smallCanvas = document.createElement('canvas');
    const smallCtx = smallCanvas.getContext('2d');
    const scaleFactor = 0.2; // Scale factor for resizing (20% of original size)

    // Set dimensions of the smaller canvas
    smallCanvas.width = canvas.width * scaleFactor;
    smallCanvas.height = canvas.height * scaleFactor;

    // Draw the original canvas content onto the smaller canvas
    smallCtx.drawImage(canvas, 0, 0, smallCanvas.width, smallCanvas.height);

    // Use the classifier to recognize the image
    classifier.classify(smallCanvas, (error, results) => {
        if (error) {
            console.error(error);
            output.textContent = 'Error processing image.';
            return;
        }

        // Check the top result from the classifier
        const label = results[0].label; // Replace with the expected label
        const confidence = results[0].confidence;

        if (label === 'ExpectedLabel' && confidence > 0.7) { // Replace 'ExpectedLabel' with the actual expected label
            output.textContent = '✔ Correct!';
        } else {
            output.textContent = '✘ Try Again.';
        }
    });
});

// Initialize the ml5 model
setup();
