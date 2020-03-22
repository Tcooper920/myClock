function myClock() {
	setInterval(function () {
		
		let date = new Date();
		let hour = date.getHours();
		let minute = date.getMinutes();
		let second = date.getSeconds();
		let timeOfDay = "AM";

		/* if military time is at noon or in the afternoon */
		if (hour >= 12) {
			timeOfDay = "PM"
		}

		// convert from military time to standard
		if (hour > 12) {
			hour = hour - 12;
		}

		// convert 0 AM military times to 12 AM times
		if (hour < 1) {
			hour = hour + 12;
		}

		// add "0" in front of minutes, if needed
		if (minute < 10) {
			minute = "0" + minute;
		}

		// add "0" in front of seconds, if needed
		if (second < 10) {
			second = "0" + second;
		}

		// print the time to the web page
		document.getElementById("clock-numbers").innerHTML = hour + ":" + minute + ":" + second + " " + timeOfDay;

		// dynamically change the background color every time it reaches a new minute
		if (minute % 2 === 0) {
			document.getElementsByTagName("html")[0].style.backgroundColor = "rgb(186, 226, 245)";
		} else {
			document.getElementsByTagName("html")[0].style.backgroundColor = "white";
		}


	}, 1000)
}

myClock();
