const images = ["0.jpeg", "1.jpeg", "2.jpeg"];
const chosenImg = images[Math.floor(Math.random() * images.length)];

const background = document.createElement("img");
background.className = "background";

background.src = `img/${chosenImg}`;
document.body.appendChild(background);
