"use strict";

function CharSheetAdvantageSelect({name, displayName, input, type, wrapper, description}) {
	this.type = type;
	this.displayName = displayName;
	this.name = name;
	this.wrapper = wrapper;
	this.description = description;
}

CharSheetAdvantageSelect.prototype.getCost = function() {
	return 0;
};