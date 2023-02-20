const inputEl = document.querySelector("#name-input")
const spanEl = document.querySelector("#name-output");
inputEl.addEventListener('input', onInputChange)


function onInputChange(params) {
    spanEl.textContent = params.currentTarget.value
}





