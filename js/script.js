'use strict';
window.addEventListener('DOMContentLoaded', function() {


	// From RGB to HEX converting function
	function hex(x) {
		var hex = x.toString(16);
		if (hex < 16) hex = "0" + hex;
		return hex;
	}
	
		// All 3 inputs
	var inputs = document.getElementsByTagName('input'),

		// Background-color 
		wrapper = document.getElementsByClassName('wrapper')[0],

		// RGB innerHTML
		rgbOutput = document.getElementsByClassName('rgb')[0],

		// HEX innerHTML
		hexOutput = document.getElementsByClassName('hex')[0];

	for (var i = 0; i < inputs.length; i++) {
		inputs[i].addEventListener('input', function() {

			// Colors
			var red = parseInt(inputs[0].value),
				green = parseInt(inputs[1].value),
				blue = parseInt(inputs[2].value),

				// Color in hexadecimal notation
				color = "#" + hex(red) + hex(green) + hex(blue);

			// Displaying the background color and innerHTML
			wrapper.style.background = "rgb("+red+", "+green+", "+blue+")";
			rgbOutput.innerHTML = red + ", " + green + ", " + blue;
			hexOutput.innerHTML = color.toUpperCase();

			// Displaying different colors
			if (red < 128 && green < 128 && blue < 128) {
				wrapper.style.color = '#FFFFFF';
			} else { wrapper.style.color = '#000000'; }
			
		});
	};
});