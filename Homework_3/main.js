const capitals = {"london": "UK",
					"kyiv": "Ukraine",
					"washington": "USA"},
		sports = {"football": "Lionel Messi",
					"basketball": "Michael Jordan",
					"boxing": "Mike Tyson"};

let result,
	userYearOfBirth = prompt("What is your year of birth?");

if (userYearOfBirth == null) {
	alert("That's a pity you didn't want to enter your year of birth");
} else {
	result = new Date().getFullYear() - parseInt(userYearOfBirth);
	let userCityOfResidence = prompt("In what city do you live?");
	if (userCityOfResidence == null) {
		alert("That's a pity you didn't want to enter your city");
	} else {
		result += ", " + (capitals[userCityOfResidence.toLowerCase()] ? "You live in the capital of " + capitals[userCityOfResidence.toLowerCase()] : "You live in " + userCityOfResidence);
		let userFavoriteSport = prompt("What is your favorite sport?");
		if (userFavoriteSport == null) {
			alert("That's a pity you didn't want to enter your favorite sport");
		} else {
			result += (sports[userFavoriteSport.toLowerCase()] ? ", cool! Wanna be like " + sports[userFavoriteSport.toLowerCase()] + "?" : "");
			alert(result);
		}
	}
}

