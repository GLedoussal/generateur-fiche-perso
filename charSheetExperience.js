"use strict";

function Experience({name, displayName, value = 0, min = 0, description, input}) {
	this.name = name;
	this.value = value;
	this.displayName = displayName;
	this.description = description;
	this.input = input;
}

Experience.prototype.setValue = function(val) {
	if (val < this.min) {
		this.value = this.min;
	} else {
		this.value = val;
	}

	if (this.input) {
		this.input.val(this.value);
	}
}

function addExperience({name, displayName, cost, value, description}) {
	const experience = new Experience({name, displayName, value, description});
	experience.input = $('<input>', {"type": "text", "data-experience": experience.name, "class": "mini-input input-experience", "id": "attr-" + experience.name, "readonly": true});
	experiences[name] = experience;

	if(typeof value === "number") {
		experience.input.val(value);
	}
	return experience;
}

const experiences = {};