
// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.
let counterValue = 0;
const buttonDecrement = document.querySelector('[data-action="decrement"]');
const buttonIncrement = document.querySelector('[data-action="increment"]');
const cpanEl = document.querySelector('#value')


buttonDecrement.addEventListener('click', setCounterDecrement);
buttonIncrement.addEventListener('click', setCounterIncrement);
function setCounterDecrement() {
    counterValue -= 1;
    cpanEl.textContent = counterValue ;
};
function setCounterIncrement() {
    counterValue += 1;
    cpanEl.textContent = counterValue ;
};