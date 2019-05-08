"use strict";

function Skill({name, displayName, difficulty, baseAttribute, bonus = 0, description, input}) {

	if (typeof Attribute !== "function") {
		console.error("Can't find Attribute.");
		return;
	}

	this.name = name;
	this.displayName = displayName;
	this.difficulty = difficulty;
	this.bonus = bonus;
	this.baseAttribute = baseAttribute;
	this.value = 0;
	this.description = description;
	this.input = input;
}

Skill.prototype.getCost = function() {
	if ( this.bonus === null ) {
		return 0;
	} else {
		if ( this.bonus === ( 0 - this.difficulty ) ) {
			return 1;
		} else if ( this.bonus ===  ( 1 - this.difficulty ) ) {
			return 2;
		} else if ( this.bonus >  ( 1 - this.difficulty ) ) {
			return 4 + ( ( this.bonus - 2 + this.difficulty ) * 4 );
		} else {
			return 0;
		}
	}
}

Skill.prototype.getMinBonus = function() {
	if ( this.difficulty === difficulty.EASY ) {
		return 0;
	} else if ( this.difficulty === difficulty.MODERATE ) {
		return -1
	} else if ( this.difficulty === difficulty.HARD ) {
		return -2
	} else if (this.difficulty === difficulty.VERYHARD ) {
		return -3
	}
}

Skill.prototype.calcValue = function() {
	if ( this.bonus !== null ) {
		return this.baseAttribute.value + this.bonus;
	} else {
		return 0;
	}
}

Skill.prototype.addBonus = function(changeInput) {
	if (this.bonus === null) {
		this.setBonus(this.getMinBonus(), changeInput);
	} else {
		this.setBonus(this.bonus + 1, changeInput);
	}
}

Skill.prototype.removeBonus = function(changeInput) {
	if (this.bonus === null)
		return;
	this.setBonus(this.bonus - 1, changeInput)
}

Skill.prototype.setBonus = function(val, changeInput) {
	if (val < this.getMinBonus()) {
		this.bonus = null;
	} else {
		this.bonus = val;
	}

	if (changeInput) {
		this.input.val(this.bonus === null ? '-' : this.calcValue());
	}
}

const addSkill = ({name, displayName, difficulty, baseAttribute, cost, value, bonus = null, description}) => {
	const skill = new Skill({name, displayName, difficulty, baseAttribute, cost, bonus, description});
	skill.input = $('<input>', {"type": "text", "data-skill": skill.name, "class": "mini-input input-skill", "id": "skill-" + skill.name, "readonly": true});
	if (!bonus) {
		skill.input.val('-');
	} else {
		skill.input.val(skill.calcValue());
	}
	skills[name] = skill;
	return skill;
};

const skills = {};

const skillCategories = {};

const setSkillCat = ({skill, cat}) => {
	if (skills[skill] && skillCategories[cat]) {
		skillCategories[cat].skills[skill] = skills[skill];
	}
}