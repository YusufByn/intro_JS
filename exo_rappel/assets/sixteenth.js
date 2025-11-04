const firstTitle = document.getElementById("title");
const firstButton = document.getElementById("firstButton");
const secondButton = document.getElementById("secondButton");
const thirdButton = document.getElementById("thirdButton");
const fourthButton = document.getElementById("fourthButton");

function changeTitleSize() {
    firstTitle.classList.add("hugeSize");
}

function changeButtonColor() {
    firstTitle.classList.add("red");
}

function changeButtonDisplay() {
    firstTitle.classList.add("displayOff");
}

function displayTitle() {
    firstTitle.classList.add("displayOn");
}

firstButton.addEventListener("click", changeTitleSize);
secondButton.addEventListener("click", changeButtonColor);
thirdButton.addEventListener("click", changeButtonDisplay);
fourthButton.addEventListener("click", displayTitle);