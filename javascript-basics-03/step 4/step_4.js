var passwordInput = document.getElementById("password");
var confirmationInput = document.getElementById("confirmation");

var testButton = document.querySelector("button[name='button']");

function checkPasswords() {
    var passwordValue = passwordInput.value;
    var confirmationValue = confirmationInput.value;

    if (passwordValue === confirmationValue) {
        passwordInput.style.border = "";
        confirmationInput.style.border = "";
    } else {
        passwordInput.style.border = "2px solid red";
        confirmationInput.style.border = "2px solid red";
    }
}

testButton.addEventListener("click", checkPasswords);