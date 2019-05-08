"use strict";

function Appearence({choices = {}, selected, input}) {
	this.choices = choices;
	this.selected = selected;
	this.input = input;
}

Appearence.prototype.addChoice = function({choice}) {
	this.choices[choice.name] = choice;
	if (this.input) {
		this.input.append($('<option>', {value: choice.name, text:choice.displayName}));
	}
};

Appearence.prototype.select = function({choice, updateSelect = true}) {
	this.selected = this.choices[choice.name];
	if (updateSelect && this.input) {
		this.input.val(choice.name);
	}
}

const appearenceObject = new Appearence({});

appearenceObject.input = $('<select>', {id: 'appearence-select'});