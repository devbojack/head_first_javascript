
var fiat = { 
    make: "BMW",
    model: "X5",
    year: 2022, 
    color: "Medium Blue",
    passengers: 5,
    convertible: false,
    mileage: 2000,
    started: false,

    start: function() {
		this.started = true;
	},

    stop: function() {
		this.started = false;
	},

    drive: function() {
		// if we use started instead of this.started, 
		// our code doesn't work!
		if (this.started) {
			console.log("Zoom zoom!");
		} else {
			console.log("You need to start the engine first.");
		}
	}
};

fiat.drive();
fiat.start();
fiat.drive();
fiat.stop();
