var correctNumber = 12;
var guessingNumber = window.prompt("Guess number");
if guessingNumber === correctNumber {
    document.write("Your guess is correct!");
}
else {
    window.alert("Sorry, try again")
}