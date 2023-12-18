
var toyota = {
	make: "Toyota",
	model: "Camry",
	year: 2016,
	color: "red",
	passengers: 5,
	convertible: false,
	mileage: 11000
};

var porsche = {
	make: "Porsche",
	model: "Cayenne",
	year: 2022,
	color: "Silver Black",
	passengers: 5,
	convertible: false,
	mileage: 8000
};

var ford = {
	make: "Ford",
	model: "Ranger",
	year: 2018,
	color: "red",
	passengers: 5,
	convertible: false,
	mileage: 88892
};


var bmw = {
	make: "BMW",
	model: "X5",
	year: 2023,
	color: "Medium Blue",
	passengers: 5,
	convertible: false,
	mileage: 7541
};

function prequal(car) {
	if (car.mileage > 8000) {
		return false;
	} else if (car.year < 2020) {
		return false;
	}
	return true;
}

function isWorthALook(didQualify, car) {
	if (didQualify) {
		console.log("You gotta check out this " + car.make + " " + car.model);
	} else {
		console.log("You should really pass on the " + car.make + " " + car.model);
	}
}
isWorthALook(prequal(ford), ford);
isWorthALook(prequal(toyota), toyota);
isWorthALook(prequal(bmw), bmw);
isWorthALook(prequal(porsche), porsche);
