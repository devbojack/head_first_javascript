
var model= {
    boardSize: 7,
    numShips: 
};

var view = {
    displayMessage: function (msg) {
        var messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = msg;
    },
    displayHit: function (location) {
        let cell = document.getElementById(location);
        cell.setAttribute("class", "hit");

    },
    displayMiss: function (location) {
        let cell = document.getElementById(location);
        cell.setAttribute("class", "miss");

    }
};

var ships = [{ locations: ["", "", ""], hits: ["", "", ""] },
    { locations: ["", "", ""], hits: ["", "", ""] }, 
    { locations: ["", "", ""], hits: ["", "", ""] }];