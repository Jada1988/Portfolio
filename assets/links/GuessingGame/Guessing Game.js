var secret = 7;

var startBtn = document.getElementById("startButton");
startBtn.onclick = guessNumber;


function guessNumber(){
var guess = parseInt(prompt("Can you guess the secret number between 1 and 10."));
checkAnswer(guess);
}

function checkAnswer(guess){
    while(guess != secret){

        if(guess > secret){
            alert("That's Incorrect! Your answer may be a bit too high");
            guessNumber();
        }else if(guess < secret){
            alert("That's Incorrect! Your answer may be a bit too low.");
            guessNumber();
        }
        else{
            alert("invalid Input");
            guessNumber()
        }
    }
    
alert("That's Correct");

}