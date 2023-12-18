

var makes = ["BMW", "Toyota", "Porsche", "Bentley", "Ford"];
var models = ["X5 40i", "Camry", "Cayenne GTS", "Continental", "Raptor"];
var years = [2023, 2018, 2022, 2014, 2021];
var colors = ["blue", "white", "tan", "gray", "red"];
var convertible = [true, false];

function makeCar() {
    const getRandom = array => array[Math.floor(Math.random() * array.length)];

    var car = {
        make: getRandom(makes),
        model: getRandom(models),
        year: getRandom(years),
        color: getRandom(colors),
        passengers: Math.floor(Math.random() * 5),
        convertible: function () {
            if (this.model == "Continental" && this.make == "Bentley") {
                return getRandom(convertible);
            }
            else {
                return false;
            }
        },
        mileage: 0
    };
    return car;
}

function displayCar(car) {
    if (makes.indexOf(car.make) == models.indexOf(car.model)) {
        console.log("Your new car is a " + car.year + " " + car.make + " " + car.model);
    }
    else {
        console.log("Are you a billionaire? Then your new car is a " + car.year + " " + car.make + " " + car.model);
    }
}

var carToSell = makeCar();
displayCar(carToSell);

