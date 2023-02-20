const inputEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text")



inputEl.addEventListener('input', onInputElInput);


function onInputElInput(event) {
spanEl.style.fontSize = `${event.currentTarget.value}px`;
};