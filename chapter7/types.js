
function lieDetectorTest() {
	var lies = 0;

	var stolenDiamond = { };
	if (stolenDiamond) {                                    // true. stolenDiamond is an empty object
    	console.log("You stole the diamond");
		lies++;
	}

	var car = {
    	keysInPocket: null
	};

	if (car.keysInPocket) {                                 // false. cars.keysInPocket is null
    	console.log("Uh oh, guess you stole the car!");
		lies++;
	}
	if (car.emptyGasTank) {                                 // false. car.emptyGasTank is undefined
    	console.log("You drove the car after you stole it!");
		lies++;
	}

	var foundYouAtTheCrimeScene = [ ];
    console.log(typeof foundYouAtTheCrimeScene);            // true. foundYouAtTheCrimeScene is an empty array, an object.
	if (foundYouAtTheCrimeScene) {
    	console.log("A sure sign of guilt");
		lies++;
	}

	if (foundYouAtTheCrimeScene[0]) {                       // false. foundYouAtTheCrimeScene[0] is undefined
    	console.log("Caught with a stolen item!");
		lies++;
	}

	var yourName = " ";
	if (yourName) {                                         // true. yourName is a string
    	console.log("Guess you lied about your name");
		lies++;
	}
	return lies;
}

var numberOfLies = lieDetectorTest();
console.log("________________________________")
console.log("You told " + numberOfLies + " lies!");
if (numberOfLies >= 3) {
	console.log("Guilty as charged");
}
