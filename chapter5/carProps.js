
var fiat = { 
    make: "Fiat",
    model: "500",
    year: 1957, 
    color: "Medium Blue",
    passengers: 2,
    convertible: false,
    mileage: 88000,
    started: false,

    start: function() {
		this.started = true;
	},

    stop: function() {
		this.started = false;
	},

    drive: function() {
		if (this.started) {
			console.log(this.make + " " +
					this.model + " goes zoom zoom!");
		} else {
			console.log("You need to start the engine first.");
		}
	}
};

fiat.start();
fiat.drive();

for (properties in fiat){
    console.log(properties + " : " + fiat[properties]);
}