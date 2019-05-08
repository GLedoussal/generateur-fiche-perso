"use strict";

function CharSheetAdvantageLevel({name, displayName, cost, description, input, type, value = 0}) {
	this.type = type;
	this.cost = cost;
	this.description = description;
	this.displayName = displayName;
	this.name = name;
	this.input = input;
	this.value = value;
}

CharSheetAdvantageLevel.prototype.getCost = function() {
	return this.cost * this.value;
}

CharSheetAdvantageLevel.prototype.setValue = function(val, changeInput) {
	if ( val >= 0 ) {
		this.value = val;
	} else {
		this.value = 0;
	}
	if (changeInput && this.input) {
		if (!this.value) {
			this.input.val('-');
		} else {
			this.input.val(val);
		}
	}
}