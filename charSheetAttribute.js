"use strict";

function Attribute({name, displayName, value = 0, cost, min = 6, max = 15, description, input}) {
	this.name = name;
	this.value = value;
	this.cost = cost;
	this.displayName = displayName;
	this.min = min;
	this.max = max;
	this.description = description;
	this.input = input;
}

Attribute.prototype.getCost = function() {
	return this.value * this.cost - (10 * this.cost);
}

Attribute.prototype.setValue = function(val) {
	if (val < this.min) {
		this.value = this.min;
	} else if (val > this.max) {
		this.value = this.max;
	} else {
		this.value = val;
	}

	if (this.input) {
		this.input.val(this.value);
	}
}

function addAttribute({name, displayName, cost, value, min = 6, max = 15, description}) {
	const attribute = new Attribute({name, displayName, cost, value, description});
	attribute.input = $('<input>', {"type": "text", "data-attribute": attribute.name, "class": "mini-input input-attribute", "id": "attr-" + attribute.name, "readonly": true});
	attributes[name] = attribute;
	return attribute;
}

const attributes = {};