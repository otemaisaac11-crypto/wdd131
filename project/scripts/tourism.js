const attractions = [
  {
    name: "Bwindi Forest",
    activity: "Gorilla Trekking"
  },
  {
    name: "Murchison Falls",
    activity: "Game Drives"
  },
  {
    name: "Source of the Nile",
    activity: "White Water Rafting"
  }
];

const cards = document.querySelector("#attractionCards");

if (cards) {
  attractions.forEach(place => {
    cards.innerHTML += `
      <div class="card">
        <h3>${place.name}</h3>
        <p>${place.activity}</p>
      </div>
    `;
  });
}

const year = document.querySelector("#year");

if(year){
  year.textContent = new Date().getFullYear();
}

const modified = document.querySelector("#lastModified");

if(modified){
  modified.textContent = `Last Modified: ${document.lastModified}`;
}

let visits = Number(localStorage.getItem("visits")) || 0;

visits++;

localStorage.setItem("visits", visits);

const visitMessage = document.querySelector("#visitMessage");

if(visitMessage){
  if(visits === 1){
    visitMessage.textContent = "Welcome! This is your first visit.";
  } else {
    visitMessage.textContent = `You have visited ${visits} times.`;
  }
}

const menuBtn = document.querySelector("#menuBtn");
const navMenu = document.querySelector("#navMenu");

if (menuBtn && navMenu) {
  menuBtn.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
}
