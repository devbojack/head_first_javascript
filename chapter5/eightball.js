var eightBall = {
	balls: ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight"],
	shake: function () {
		return this.balls[Math.floor(Math.random() * this.balls.length)];
	},
	display: function () {
		console.log(this.shake());
	}
}
eightBall.display();


var eightBall = {
	index: 0,
	advice: ["yes", "no", "maybe", "not a chance"],
	shake: function () {
		this.index = this.index + 1;
		if (this.index >= this.advice.length) {
			this.index = 0;
		}
	},
	look: function () {
		return this.advice[this.index];
	}
};

eightBall.shake();
console.log(eightBall.look());

eightBall.shake();
console.log(eightBall.look());

eightBall.shake();
console.log(eightBall.look());
