
// Primitive types (like numbers) are passed by value
//  while objects and arrays are passed by reference.

var balance = 10500;
var cameraOn = true;

function steal(balance, amount) {
    // balance is 'passed by value'. It will not affect the original balance
    cameraOn = false;
    if (amount < balance) {
        balance = balance - amount;
    }
    cameraOn = true;
    return amount;
    
}

var amount = steal(balance, 1250);
console.log("Balance after 'stealing' " + balance);
console.log("'Criminal': you stole " + amount + "!. You're not busy");