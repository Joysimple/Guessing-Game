var correctNumber = 12;
var guessingNumber = window.prompt("Guess number");
if (guessingNumber === correctNumber) {
    document.write("<p>Your guess is correct!</p>");
}
else {
    window.alert("Sorry, try again");
}