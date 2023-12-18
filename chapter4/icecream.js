

var products = ["Choo Choo Chocolate",
    "Icy Mint",
    "Cake Batter",
    "Bubblegum"];

var hasBubbleGum = [false,
    false,
    false,
    true];

for (var i = 0; i < products.length; i++) {
    if (hasBubbleGum[i] == true) {
        console.log(products[i] + " contains bubble gum");
    }
}