const msToDays = 84600000;
const visitInfo = document.querySelector("#visitInfo");
const today = Date.now();
const lastVisit = localStorage.getItem('lastVisit') || 0;

if (lastVisit == 0) {
    visitInfo.textContent = "Welcome! Let us know if you have any questions."
} 
else {
    var daysPassed = Math.floor((today - lastVisit)/msToDays);

    if (daysPassed < 1) {
        visitInfo.textContent = "Back so soon! Awesome!";
    } else {
        var daysMessage = daysPassed === 1 ? "day" : "days";
        visitInfo.textContent = "You last visited " + daysPassed + " " + daysMessage + " ago.";
    }
}
localStorage.setItem('lastVisit',Date.now());
