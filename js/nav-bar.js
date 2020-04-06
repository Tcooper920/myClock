/* mobile dropdown menu triggered by clicking "hamburger" button *********/
document.getElementById("mobile-menu-button").addEventListener("click", function () {

	var numberOfLinks = document.getElementsByClassName("page-links");

	if (document.getElementsByTagName("nav")[0].getElementsByClassName("page-links")[0].style.display != "block") {

		for (var i = 0; i < numberOfLinks.length; i++) {
			document.getElementsByTagName("nav")[0].getElementsByClassName("page-links")[i].style.display = "block";
		}

	} else {

		for (var i = 0; i < numberOfLinks.length; i++) {
			document.getElementsByTagName("nav")[0].getElementsByClassName("page-links")[i].style.display = "none";
		}

	}

});

// display the hidden nav links when expanding browser width from mobile size to desktop size *********/
function displayHiddenNavLinksOnDesktop() {

	var numberOfLinks = document.getElementsByClassName("page-links");

	if (window.innerWidth >= 650) { // display links on desktop view
		for (var i = 0; i < numberOfLinks.length; i++) {
			document.getElementsByTagName("nav")[0].getElementsByClassName("page-links")[i].style.display = "block";
		}
	} else {
		for (var i = 0; i < numberOfLinks.length; i++) { // hide links on mobile view
			document.getElementsByTagName("nav")[0].getElementsByClassName("page-links")[i].style.display = "none";
		}
	}

}

window.onresize = displayHiddenNavLinksOnDesktop;

// hide nav bar when scrolling down and show nav bar when scrolling up *********/
var beforeScrollPosition = window.pageYOffset;

window.onscroll = function() {

	var numberOfLinks = document.getElementsByClassName("page-links");
	
	var currentScrollingPosition = window.pageYOffset;

	if (beforeScrollPosition < currentScrollingPosition) {	
		for (var i = 0; i < numberOfLinks.length; i++) { // hide links in nav bar
			document.getElementsByTagName("nav")[0].getElementsByClassName("page-links")[i].style.display = "none";
		}
		document.getElementsByTagName("nav")[0].style.top = "-6rem"; // hide nav bar
	} else {
		
		if (window.innerWidth >= 650) { // hide links by default if window resized from desktop to mobile width
			for (var i = 0; i < numberOfLinks.length; i++) { // show links in nav bar
				document.getElementsByTagName("nav")[0].getElementsByClassName("page-links")[i].style.display = "block";
			}
		}
		document.getElementsByTagName("nav")[0].style.top = "0"; //show nav bar
	}
	beforeScrollPosition = currentScrollingPosition;
}