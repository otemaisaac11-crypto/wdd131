
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// . Toggle the 'show' class on the nav and button when clicked
document.getElementById("menu").addEventListener("click", function() {
    document.querySelector("nav").classList.toggle("show");
    this.classList.toggle("show");
});