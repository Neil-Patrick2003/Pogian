// Buggy main.js
document.getElementById("title").innerText = "Welcome";

document.getElementById("menuBtn").addEventListener("click", toggleMenu);

// toggleMenu is not defined

function toggleMenu(){
  alert('Toggle Menu!');
}
