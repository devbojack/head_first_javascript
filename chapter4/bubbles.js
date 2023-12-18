
var scores = [60, 50, 60, 58, 54, 54,
    58, 50, 52, 54, 48, 69,
    34, 55, 51, 52, 44, 51,
    69, 64, 66, 55, 52, 61,
    46, 31, 57, 52, 44, 18,
    41, 53, 55, 61, 51, 44];


// With a while loop
var i = 0;
var highScore = 0;
while (i < scores.length) {
    console.log("Bubble solution #" + i + " score: " + scores[i]);
    if (scores[i] > highScore) {
        highScore = scores[i];
    }
    i++;
}
console.log("Bubbles tests: " + scores.length);
console.log("Highest bubble score: " + highScore);


// With a for loop
for (var i = 0; i < scores.length; i++) {
    console.log("Bubble solution #" + i + " score: " + scores[i]);
    if (scores[i] > highScore) {
        highScore = scores[i];
    }
}
console.log("Bubbles tests: " + scores.length);
console.log("Highest bubble score: " + highScore);


// Finding index with the best score using for
var bestSolutions = [];
for (var i = 0; i < scores.length; i++) {
    if (scores[i] == highScore) {
        bestSolutions.push(i);
    }
}
console.log("Solutions with the highest score: " + bestSolutions);

// Altogether. Highscore and its index.
bestSolutions = [];
highScore = 0;
for (var i = 0; i < scores.length; ++i) {
    output = "Bubble solution #" + i + " score:" + scores[i];
    console.log(output);
    if (scores[i] > highScore) {
        highScore = scores[i];
        bestSolutions = [i];
    } else if (scores[i] == highScore) {
        bestSolutions.push(i);
    }
}
console.log("Highest bubble score: " + highScore);
console.log("Best solutions: " + bestSolutions);
