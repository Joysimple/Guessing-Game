var correctNumber = 12;

for (i = 1; i <= 5; i++) {
var guessingNumber = window.prompt("Guess number");
if (guessingNumber === correctNumber) {
    document.write("<p>Your guess is correct!</p>");
    break;
}
else {
     window.alert("Sorry, try again, you have " + (5 - i) + " attempt");
     }
}