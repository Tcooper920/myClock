
let leftArrow = document.getElementById("left");

let rightArrow = document.getElementById("right");

let imageArray = ["image-1.jpg", "image-2.jpg", "image-3.jpg", "image-4.jpg", "image-5.jpg", "image-6.jpg"];

let imageContainer = document.getElementById("image-slider"); // fading transition set in CSS file

let counter = 0;


// left arrow
leftArrow.addEventListener("click", function () {

	imageContainer.style.opacity = "0"; // fade to white before showing next image

	if (counter !== 0) { // if not at first image...

		setTimeout(function () { 
			counter = counter - 1; // scroll left to next img
			imageContainer.style.opacity = "1"; 
			imageContainer.style.backgroundImage = "url('images/" + imageArray[counter] + "')";

			// if slider image = "undefined", reset counter to last image
			if (imageContainer.style.backgroundImage.indexOf("undefined") !== -1) {
				counter = imageArray.length - 1;
				imageContainer.style.backgroundImage = "url('images/" + imageArray[counter] + "')"; ;	
			}

		}, 300);

	} else {

		setTimeout(function () { 

			counter = imageArray.length - 1; // array index starts at "0" while array.length starts at "1"
			imageContainer.style.opacity = "1";
			imageContainer.style.backgroundImage = "url('images/" + imageArray[counter] + "')";

			// if slider image = "undefined", reset counter to last image
			if (imageContainer.style.backgroundImage.indexOf("undefined") !== -1) {
				counter = imageArray.length - 1;
				imageContainer.style.backgroundImage = "url('images/" + imageArray[counter] + "')"; ;	
			}

		}, 300);
	}
});


// right arrow
rightArrow.addEventListener("click", function () {

	imageContainer.style.opacity = "0"; // fade to white before showing next image

	if (counter !== imageArray.length - 1) { // if not at last image...

		setTimeout(function () { 
			counter = counter + 1; // scroll right to next img
			imageContainer.style.opacity = "1"; 
			imageContainer.style.backgroundImage = "url('images/" + imageArray[counter] + "')"; 

			// if slider image = "undefined", reset counter to last image
			if (imageContainer.style.backgroundImage.indexOf("undefined") !== -1) {
				counter = imageArray.length - 1;
				imageContainer.style.backgroundImage = "url('images/" + imageArray[counter] + "')"; ;	
			}

		}, 300);


	} else {

		setTimeout(function () { 

			counter = 0;
			imageContainer.style.opacity = "1";
			imageContainer.style.backgroundImage = "url('images/" + imageArray[counter] + "')";

			// if slider image = "undefined", reset counter to last image
			if (imageContainer.style.backgroundImage.indexOf("undefined") !== -1) {
				counter = imageArray.length - 1;
				imageContainer.style.backgroundImage = "url('images/" + imageArray[counter] + "')"; ;	
			}

		}, 300);
	}
});


/* automatically scroll through images– even if a button is not pressed */

setInterval(function () { 

	imageContainer.style.opacity = "0"; // fade to white before showing next image

	setTimeout(function () { 

		if (counter !== imageArray.length - 1) { // if not at last image...

			counter = counter + 1; // scroll right to next img
			imageContainer.style.opacity = "1"; 
			imageContainer.style.backgroundImage = "url('images/" + imageArray[counter] + "')"; 

		} else {

			counter = 0;
			imageContainer.style.opacity = "1";
			imageContainer.style.backgroundImage = "url('images/" + imageArray[counter] + "')";
		}

		}, 300);

}, 5000);


