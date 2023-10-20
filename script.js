const colors = ['#ffde00', '#49016a', '#ff009c'];

const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

const storedColors = new Map(); // To store colors for each text element

const textElements = document.querySelectorAll('.random-color-text');

textElements.forEach((textElement) => {
  textElement.addEventListener('mouseenter', () => {
    const newBackgroundColor = getRandomColor();
    let newTextcolor;

    do {
      newTextcolor = getRandomColor();
    } while (newTextcolor === newBackgroundColor);

    // Store the generated colors
    storedColors.set(textElement, { background: newBackgroundColor, text: newTextcolor });

    textElement.style.backgroundColor = newBackgroundColor;
    textElement.style.color = newTextcolor;
  });

  textElement.addEventListener('mouseleave', () => {
    // Retrieve and apply stored colors
    const storedColor = storedColors.get(textElement);
    if (storedColor) {
      textElement.style.backgroundColor = storedColor.background;
      textElement.style.color = storedColor.text;
    }
  });
});
