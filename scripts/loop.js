const DAYS = 6;

const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

let today = new Date().getDay();

for (let i = 0; i < DAYS; i++) {
    let nextDay = (today + i) % 7;
    console.log(dayNames[nextDay]);
}