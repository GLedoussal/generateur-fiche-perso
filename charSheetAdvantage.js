const advantages = {};
const advantagesCategories = {};

function addAdvantage({name, displayName, cost, description, advantageType, category, parent, type = "BOOL"}) {
	let advantage;
	switch(type) {
		case "BOOL":
			advantage = new CharSheetAdvantageBool({name, displayName, cost, description, type});
			advantage.input = $('<input>', {"type": "checkbox", "data-advantage": advantage.name, "id": "adv-" + advantage.name});
			break;
		case "LEVEL":
			advantage = new CharSheetAdvantageLevel({name, displayName, cost, description, type});
			advantage.input = $('<input>', {"type": "text", "data-advantage": advantage.name, "id": "adv-" + advantage.name, "readonly": true, 'class': 'mini-input input-skill'}).val('-');
			break;
		case "SELECT":
			advantage = new CharSheetAdvantageSelect({name, displayName, type, description});
			advantage.wrapper = $('<div>', {'class': 'advantage-wrapper'});
			break;
		case "OPTION":
			advantage = new CharSheetAdvantageBool({name, displayName, cost, description, type, parent});
			advantage.input = $('<input>', {"type": "checkbox", "data-advantage": advantage.name, "id": "adv-" + advantage.name});
			break;
		break;
	}

	if (advantage)
		advantages[advantage.name] = advantage;
	return advantage;
}

const setAdvantageCat = ({advantage, cat}) => {
	if (advantages[advantage] && advantagesCategories[cat]) {
		advantagesCategories[cat].advantages[advantage] = advantages[advantage];
	}
}