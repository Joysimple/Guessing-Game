var correctNumber = 12;
won = false;
count = 5;
for (i = 1; i <= count; i++) {
    var guessingNumber = window.prompt("Guess number");
    if (guessingNumber === correctNumber) {
        document.write("<p>Your guess is correct!</p>");
        won = true;
    break;
     }
    else {
         window.alert("Sorry, try again, you have " + (5 - i) + " attempt");
     }
}
if (won == false) {
    window.alert("<p>Game over ;(</p>");  
}