// Generate a string of a random rgb css value;
const GenerateColor = () => {
  return `rgb(${Math.floor(Math.random() * 255) + 1}, ${Math.floor(Math.random() * 255) + 1}, ${
    Math.floor(Math.random() * 255) + 1
  })`;
};

// Function that generate a random color for the background
const generateNewColors = () => {
  let randomColor = GenerateColor();
  document.body.style.backgroundColor = randomColor;

  const h1 = document.querySelector("h1");

  const titleToFlip = "COLOR-FLIPPER";
  let title = "";

  // Loop to generate a random color for each letter of the title
  for (let index = 0; index < titleToFlip.split("").length; index++) {
    title += `<span style="color: ${GenerateColor()}">${titleToFlip[index]}</span>`;
  }

  h1.innerHTML = title;

  // Add text of the rgb value into de Random color container
  const backgroundTitleContainer = document.querySelector("#backgroundTitle");
  backgroundTitleContainer.replaceChildren("Random color:");
  const span = document.createElement("span");
  const spanContent = document.createTextNode(randomColor);
  span.appendChild(spanContent);
  span.style.color = randomColor;
  backgroundTitleContainer.appendChild(span);
};

generateNewColors();
