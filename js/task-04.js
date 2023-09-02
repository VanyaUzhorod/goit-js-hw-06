
const decrementButton = document.querySelector('button[data-action="increment"]');
const incrementButton = document.querySelector('button[data-action="decrement"]');
const initialValue = document.getElementById("value");
let counterValue = 0;
incrementButton.addEventListener("click", function () {
    counterValue -= 1;
    initialValue.textContent = counterValue;
});
decrementButton.addEventListener(`click`, function () {
    counterValue += 1;
    initialValue.textContent = counterValue;
});