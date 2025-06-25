// Buggy form.js
document.querySelector("form").addEventListener("submit", function(event) {
    var name = document.querySelector("[name='name']").value;
    var email = document.querySelector("[name='email']").value;

    if (email.indexOf('@') === -1) {
	       event.preventDefault();
         alert("Invalid email");
	       return;
    }

    alert("Form submitted!");
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
