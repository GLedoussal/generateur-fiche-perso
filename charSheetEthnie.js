"use strict";

function Ethnie({choices = {}, selected, input}) {
	this.choices = choices;
	this.selected = selected;
	this.input = input;
}

Ethnie.prototype.addChoice = function({choice}) {
	this.choices[choice.name] = choice;
	if (this.input) {
		this.input.append($('<option>', {value: choice.name, text:choice.displayName}));
	}
};

Ethnie.prototype.select = function({choice, updateSelect = true}) {
	this.selected = this.choices[choice.name];
	if (updateSelect && this.input) {
		this.input.val(choice.name);
	}
}

const ethnieObject = new Ethnie({});

ethnieObject.input = $('<select>', {id: 'ethnie-select'});