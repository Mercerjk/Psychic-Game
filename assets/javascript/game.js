
  //Letter choice available
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

//variables
let wins = 0;
let losses = 0;
let guessesLeft = 9;
let playerGuess = [];

var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

document.onkeypress = function(event) {

    var userGuess = event.key;

    if(userGuess === computerChoice){
        wins++;
        document.getElementById('wins').innerHTML = "Wins: " + wins;
        reset();
    }
    else {
        guessesLeft = guessesLeft - 1;
        playerGuess.push(userGuess);

        if (guessesLeft ===0) {
            losses++;
            document.getElementById('losses').innerHTML = "Losses: " + losses;
            reset();
        }
    }


    document.getElementById('attempts').innerHTML = "Attemps Remaing: " + guessesLeft;
    document.getElementById('playerGuess').innerHTML = "Guessed Letters:  " + playerGuess;

};

    // Values and scores generated to HTMLs
    document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById('losses').innerHTML = "Losses: " + losses;
    document.getElementById('attempts').innerHTML = "Attemps Remaing: " + guessesLeft;
    document.getElementById('playerGuess').innerHTML = "Guessed Letters:  " + playerGuess;

    function reset () {
        guessesLeft = 9;
        playerGuess = [];
        computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    }