"use strict";

function CharSheetAdvantageBool({name, displayName, cost, description, input, type, value = 0, parent}) {
	this.type = type;
	this.cost = cost;
	this.description = description;
	this.displayName = displayName;
	this.name = name;
	this.input = input;
	this.value = value;
	this.parent = parent;
}

CharSheetAdvantageBool.prototype.getCost = function() {
	if (this.value) {
		return this.cost;
	}

	return 0;
}

CharSheetAdvantageBool.prototype.setValue = function(val, changeInput) {
	this.value = val;
	if (changeInput && this.input) {
		this.input.prop('checked', val ? true : false);
	}
}