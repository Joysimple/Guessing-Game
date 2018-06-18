var correctNumber = 12;
var guessingNumber = window.prompt("Guess number");
for (i = 1; i <= 5; i++) {
if (guessingNumber === correctNumber) {
    document.write("<p>Your guess is correct!</p>");
}
else {
     window.alert("Sorry, try again, you have " + (5 - i) + " attempt");
     }
}