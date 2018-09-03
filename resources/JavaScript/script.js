// Our array of letters
var letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];
  
  // Holds what we guess
  var guessedLetters = [];
  
  // Will be randomly assigned one of the 26 letters
  var letterToGuess = null;
  
  // Our tracked score, losses, and lives
  var guessesLeft = 5;
  var wins = 0;
  var losses = 0;

  // Created three functions to updateGuesses, updatedGuessesLeft, and updateGuessesSoFar
  var updatedGuessesLeft = function() {
      document.querySelector('#guesses-left').innerHTML = guessesLeft;
  };

  var updateLetterToGuess = function() {
      letterToGuess = letters[Math.floor(Math.random() * letters.length)];
  };

  var updateGuessesSoFar = function() {
      document.querySelector('#guesses-so-far').innerHTML = guessedLetters.join(', '); 
  };

  // Reset function to reset after win or out of guesses
  var reset = function() {
      guessesLeft = 5;
      guessedLetters = [];
      updatedGuessesLeft();
      updateLetterToGuess();
      updateGuessesSoFar();
  }

  