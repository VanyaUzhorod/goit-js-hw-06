const button = document.querySelector(".change-color");
const bodySite = document.querySelector("body");
const nameColor = document.querySelector(".color");

button.addEventListener("click", onClickButton);

function onClickButton(event) {
  document.body.style.backgroundColor = bodySite.nameColor = getRandomHexColor();
}



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
