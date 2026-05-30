
// Puts current year in footer
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

// Puts last modified date in footer
const lastModifiedDate = document.lastModified;
document.getElementById('lastModified').textContent = `Last modified: ${lastModifiedDate}`;

// Calculate wind chill
function calculateWindChill(temp, windSpeed) {
    return 13.12 + (0.6215 * temp) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temp * Math.pow(windSpeed, 0.16));
}

// Example values for temperature and wind speed
let temp = 25;
let windSpeed = 10;

   // Calculate and display wind chill
let windChill;
 // Check if cold enough for wind chill calculation
if (temp <= 10 && windSpeed > 4.8) {
    windChill = Math.round(calculateWindChill(temp, wind) * 10) / 10;
} else {
    // If not cold enough, display "N/A"
    windChill = "N/A";
}
//Add wind chill to the weather section
document.querySelector('.weather').innerHTML += `<p><strong>Wind Chill:</strong> ${windChill}</p>`;