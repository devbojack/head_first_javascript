// node bake.js


function bake(degrees) {
    var message;

    if (degrees > 500) {
        message = "I'm not a nuclear reactor!";
    } else if (degrees < 100) {
        message = "I'm not a refrigerator!";
    } else {
        message = "That's a very comfortable temperature for me.";
        setMode("bake");
        setTemp(degrees);
    }
    return message;
}

var bakeStatus = bake(350);
console.log(bakeStatus);


function setMode(mode) {
    // set baking mode
};
function setTemp(degrees) { 
    // set baking temp
};
