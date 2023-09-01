var showLink = document.getElementById("show");
var hideLink = document.getElementById("hide");
var texteDiv = document.getElementById("texte");

function toggleTextVisibility() {
    if (texteDiv.style.display === "none" || texteDiv.style.display === "") {
        texteDiv.style.display = "block"; 
    } else {
        texteDiv.style.display = "none"; 
    }
}

showLink.addEventListener("click", toggleTextVisibility);
hideLink.addEventListener("click", toggleTextVisibility);