
// Get current year
const year = new Date().getFullYear();

// Place current year in footer
document.getElementById("currentyear").textContent = year;

// Place last modified date in footer
document.getElementById("lastModified").textContent =
    `Last Modified: ${document.lastModified}`;