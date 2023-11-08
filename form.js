    const submitButton = document.getElementById("submitButton");
    const nameInput = document.getElementById("name-field");
    const lastnameInput = document.getElementById("lastname-field");
    const birthdateInput = document.getElementById("birthdate-field");

    submitButton.addEventListener("click", function(event) {
        event.preventDefault();


        nameInput.value = "";
        lastnameInput.value = "";
        birthdateInput.value = "";
    });
