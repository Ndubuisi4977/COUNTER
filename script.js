
let count = 0;

let countDisplay = document.getElementById("count");

let increaseButton = document.getElementById("increase");
let decreaseButton = document.getElementById("decrease");
let resetButton = document.getElementById("reset");

increaseButton.onclick = function () {
    count++;
    countDisplay.textContent = count;
    updateColor();
};

decreaseButton.onclick = function () {
    count--;
    countDisplay.textContent = count;
    updateColor();
};

resetButton.onclick = function () {
    count = 0;
    countDisplay.textContent = count;
    updateColor();
};

function updateColor() {
    if (count > 0) {
        countDisplay.style.color = "green";
    } else if (count < 0) {
        countDisplay.style.color = "red";
    } else {
        countDisplay.style.color = "black";
    }
}
