let resetButton = document.querySelector("button[name='button']");

resetButton.addEventListener("click", function() {
    let confirmation = confirm("Do you want to reset all fields?");

    if (confirmation) {
        document.getElementById("name").value = "";
        document.getElementById("surname").value = "";
        document.getElementById("city").value = "";
    }
});