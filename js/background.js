const images = ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
// pick random image for the background

//let element = document.getElementById("body");

console.log(chosenImage)
imageUrl = `img/${chosenImage}`;
document.body.style.backgroundImage = `url('${imageUrl}')`;
document.body.style.backgroundPosition = "center";
// set random background image