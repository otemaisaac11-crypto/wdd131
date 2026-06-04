// Place current year in footer
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Place current date on page
const currentDateElement = document.getElementById("currentdate");
if (currentDateElement) {
    currentDateElement.textContent = new Date().toLocaleDateString();
}

// Place last modified date in footer
document.getElementById("lastModified").textContent = document.lastModified;
    
// Toggle the 'show' class on the nav and button when clicked
document.getElementById("menu").addEventListener("click", function() {
    document.querySelector("nav").classList.toggle("show");
    this.classList.toggle("show");
});