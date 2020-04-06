/* popup module */

const popUp = document.getElementById("contact-me-popup-container");

const exitButton = document.getElementsByClassName("x-button")[0];

const contactMeNavButton = document.getElementById("contact-me")

/* trigger popup after time has passed */
setTimeout(function(){ 
	popUp.style.display = "block";
}, 30000);

exitButton.addEventListener("click", function () {
	popUp.style.display = "none";
});

contactMeNavButton.addEventListener("click", function () {
	popUp.style.display = "block";
});