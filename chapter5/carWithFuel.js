
var fiat = { 
    make: "Porsche",
    model: "Cayenne",
    year: 2021, 
    color: "Silver Black",
    passengers: 5,
    convertible: false,
    mileage: 8800,
	fuel: 0,
    started: false,

    start: function() {
		if (this.fuel == 0) {
			console.log("The car is on empty, fill up before starting!");
		} else {
			this.started = true;
		}
	},

    stop: function() {
		this.started = false;
	},

	drive: function() {
		if (this.started) {
			if (this.fuel > 0) {
				console.log(this.make + " " +
				      this.model + " goes zoom zoom!");
				this.fuel = this.fuel - 1;
			} else {
				console.log("Uh oh, out of fuel.");
				this.stop();
			} 
		} else {
			console.log("You need to start the engine first.");
		}
	},

	addFuel: function(amount) {
		this.fuel = this.fuel + amount;
	}
};

fiat.start();
fiat.drive();
fiat.addFuel(2);
fiat.start();
fiat.drive();
fiat.drive();
fiat.drive();
fiat.stop();
