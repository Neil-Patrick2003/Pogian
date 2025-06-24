// Buggy form.js
document.querySelector("form").addEventListener("submit", function(event) {
    var name = document.querySelector("[name='name']").value;
    var email = document.querySelector("[name='email']").value;

    if (email.indexOf('@') === -1) {
        alert("Invalid email");
    }

    alert("Form submitted!");
});

var submitButton = document.querySelector("button");
submitButton.addEventListener("click", function() {
    var name = document.querySelector("[name='name']").value;
    if (name === "") {
        alert("Name is required");
    }
});
