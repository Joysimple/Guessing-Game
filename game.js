var correctNumber = 12;
var won = false;
var count = 5;
var guessingArray = [];
fLen = guessingArray.length;
for (i = 1; i <= count; i++) {
    var guessingNumber = window.prompt("Guess number");
    if (guessingNumber == correctNumber) {
        document.write("<p>Your guess is correct!</p>");
        won = true;
        break;
     }
    else {
         guessingArray[i] = guessingNumber;
         window.alert("Sorry, try again, you have " + (count - i) + " attempt");
         for (j = 0; j <= fLen; j++){
             if (guessingArray[j] == guessingNumber) {
                 window.alert("You already use this number ");
             }
         }
     }
}
if (won == false) {
    window.alert("<p>Game over ;(</p>");  
}