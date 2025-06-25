// Buggy form.js

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault();

        var name = document.querySelector("[name='name']").value.trim();
        var email = document.querySelector("[name='email']").value.trim();

        if (name === "") {
            alert("Name is required");
            return;
        }

        if (email.indexOf('@') === -1) {
            alert("Invalid email");
            return;
        }

        alert("Form submitted!");
    });
});

var submitButton = document.querySelector("button");
submitButton.addEventListener("click", function() {
    var name = document.querySelector("[name='name']").value;
    if (name === "") {
  	       event.preventDefault();
           alert("Name is required");
  	       return;
      }
});
