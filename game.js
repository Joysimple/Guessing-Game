var correctNumber = 12;
var won = false;
var count = 5;
var guessingArray = [];
function isPreviousGuess(){
    var duplicate =  guessingArray.indexOf(guessingNumber);
    return duplicate;
    }
}
for (i = 1; i <= count; i++) {
    var guessingNumber = window.prompt("Guess number");
    if (guessingNumber == correctNumber) {
        document.write("<p>Your guess is correct!</p>");
        won = true;
        break;
     }
    else {
         isPreviousGuess(guessingNumber); 
         guessingArray[i] = guessingNumber;
         window.alert("Sorry, try again, you have guessed: " + guessingArray.toString() + ", you have " + (count - i) + " attempt");
         

             }
         }
     
if (won == false) {
    window.alert("<p>Game over ;(</p>");  
}