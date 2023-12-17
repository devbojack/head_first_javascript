
function Duck(someSound) { 
	this.sound = someSound;
	this.quack = function() {
		console.log("The Duck says: " + someSound);
	};
}
var toy = new Duck("quack quack"); 
toy.quack();
console.log("typeOf toy: -------> " + typeof toy); 
console.log("typeOf toy.sound: -------> " + typeof toy.sound);
console.log("typeOf toy.quack: -------> " + typeof toy.quack);
console.log("Is toy instanceOf Duck? -------> " + (toy instanceof Duck));