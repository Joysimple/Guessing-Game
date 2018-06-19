var correctNumber = 12;
var won = false;
var count = 5;
var guessingArray = [];
function isPreviousGuess(guessingNumber){
    var duplicate =  guessingArray.indexOf(guessingNumber);
    return duplicate;
    }

 while(count <= 5) {
    var guessingNumber = window.prompt("Guess number");
    if (guessingNumber == correctNumber) {
        document.write("<p>Your guess is correct!</p>");
        won = true;
        break;
     }
    else {
         var a = isPreviousGuess(guessingNumber); 
         if (a == -1){
             guessingArray[i] = guessingNumber;
             window.alert("Sorry, try again, you have guessed: " + guessingArray.toString() + ", you have " + (count - i) + " attempt");
         
         }
         else{
            window.alert("Sorry, you already guessed this number, try again"); 
            continue;
         }

             }
         }
     
if (won == false) {
    window.alert("<p>Game over ;(</p>");  
}