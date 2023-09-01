var imageElement = document.getElementById("image1");

imageElement.addEventListener("mouseover", function() {
    imageElement.style.border = "3px solid red";
});

imageElement.addEventListener("mouseout", function() {
    imageElement.style.border = "none";
});