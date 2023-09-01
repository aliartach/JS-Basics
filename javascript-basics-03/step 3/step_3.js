var greenColor = document.querySelector(".green");
var redColor = document.querySelector(".red");
var blueColor = document.querySelector(".blue");

var textElement = document.getElementById("text");

function changeTextColor(color) {
    textElement.style.color = color;
}

greenColor.addEventListener("click", function() {
    changeTextColor("green");
});

redColor.addEventListener("click", function() {
    changeTextColor("red");
});

blueColor.addEventListener("click", function() {
    changeTextColor("blue");
});