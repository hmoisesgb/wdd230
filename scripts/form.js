/* Range */
const rangevalue = document.getElementById("rangeValue");
const range = document.getElementById("pageRating");

range.addEventListener('change', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}

/* Password match */

const password = document.getElementById("password");
const confirmation = document.getElementById("passwordConfirmation");
const message = document.querySelector("#message");

confirmation.addEventListener("focusout", checkPassword);

function checkPassword() {
    if (password.value !== confirmation.value) {
        message.textContent = "❗Passwords DO NOT MATCH!"
        message.style.visibility = "visible";
        confirmation.style.backgroundColor = "#fff0f3";
        password.value = "";
        confirmation.value = "";
        password.focus();
    } else {
        confirmation.style.backgroundColor = "#fff";
        message.style.visibility = "hidden";
    }
}
