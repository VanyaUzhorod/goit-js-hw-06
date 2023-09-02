const rangeInput = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

rangeInput.addEventListener("input", onRangeChenge);

function onRangeChenge(event) {
    const fontSize = event.target.value + 'px';
    text.style.fontSize = fontSize;
}