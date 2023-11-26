const modeButton = document.querySelector("#mode");
const body = document.querySelector("body");
const main = document.querySelector("main");
const section = document.querySelector("section");
const section2 = document.getElementById('section2');

modeButton.addEventListener("click", () => {
	body.classList.toggle('dark-mode');
	main.classList.toggle('dark-mode');
    section.classList.toggle('dark-mode');
    section2.classList.toggle('dark-mode');
    document.getElementById("heroLabel").style.color = "black";
});