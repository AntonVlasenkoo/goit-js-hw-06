function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const btnEl = document.querySelector(".change-color");
const bodyEl = document.querySelector("body")
const spanEl = document.querySelector(".color")
btnEl.addEventListener('click',onBtnElClick)


function onBtnElClick(event) {
  bodyEl.style.backgroundColor = `${getRandomHexColor()}`;
  spanEl.textContent = `${getRandomHexColor()}`;
}



