'use strict';
class ColorPicker {
	constructor(inputs, wrapper, rgbOutput, hexOutput) {
		this.inputs = inputs;
		this.wrapper = wrapper;
		this.rgbOutput = rgbOutput;
		this.hexOutput = hexOutput;
	};

	hex(x) {
		let hex = x.toString(16);
		if (hex < 16) hex = "0" + hex;
		return hex;
	};

	handler() {
		for (let i = 0; i < this.inputs.length; i++) {
			this.inputs[i].addEventListener('input', () => {

				let red = parseInt(this.inputs[0].value),
					green = parseInt(this.inputs[1].value),
					blue = parseInt(this.inputs[2].value),
					color = '#' + this.hex(red) + this.hex(green) + this.hex(blue);
	
				this.wrapper.style.background = 'rgb('+red+', '+green+', '+blue+')';
				this.rgbOutput.innerHTML = red + ", " + green + ", " + blue;
				this.hexOutput.innerHTML = color.toUpperCase();
	
				if (red < 128 && green < 128 && blue < 128) {
					this.wrapper.style.color = '#FFFFFF';
				} else { this.wrapper.style.color = '#000000'; }
			});
		};
	};

};

const inputs = document.querySelectorAll('input'),
	  wrapper = document.querySelector('.wrapper'),
	  rgbOutput = document.querySelector('.rgb'),
	  hexOutput = document.querySelector('.hex'),
	  colorpicker = new ColorPicker(inputs, wrapper, rgbOutput, hexOutput);

colorpicker.handler();