
// Primitive types (like numbers) are passed by value
//          while objects and arrays are passed by reference.

// To modify a variable declared outside a function within 
//          that function, you can pass an object (which is passed by 
//          reference) containing the variable as a property, and then 
//          modify that property of the object.

var admin = {
    balance: 10500
};
var cameraOn = true;

function steal(admin, amount) {
    // balance is 'passed by reference'. It will affect the original balance.
    cameraOn = false;
    if (amount < admin.balance) {
        admin.balance -= amount;
    }
    cameraOn = true;
    return amount;

}

var originalBalance = admin.balance;
var amount = steal(admin, 1250);

if (admin.balance < originalBalance) {
    console.log("Balance after stealing " + admin.balance);
    console.log("'Criminal': you stole " + (originalBalance - admin.balance) + "!. You're busy!!");
}