
// Get current year
const year = new Date().getFullYear();

// Place current year in footer
document.getElementById("currentyear").textContent = year;

// Place last modified date in footer
document.getElementById("lastModified").textContent =
    `Last Modified: ${document.lastModified}`;

    
// Toggle the 'show' class on the nav and button when clicked
document.getElementById("menu").addEventListener("click", function() {
    document.querySelector("nav").classList.toggle("show");
    this.classList.toggle("show");
});