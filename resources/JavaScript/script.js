// Our array of letters
const letters = [
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
  let guessedLetters = [];
  
  // Will be randomly assigned one of the 26 letters
  let letterToGuess;
  
  // Our tracked score, losses, and lives
  let guessesLeft = 5;
  let wins = 0;
  let losses = 0;

  // Created three functions to updateGuesses, updatedGuessesLeft, and updateGuessesSoFar
  let updatedGuessesLeft = function() {
      document.querySelector('#guesses-left').innerHTML = guessesLeft;
  };

  let updateLetterToGuess = function() {
      letterToGuess = letters[Math.floor(Math.random() * letters.length)];
  };

  let updateGuessesSoFar = function() {
      document.querySelector('#guesses-so-far').innerHTML = guessedLetters.join(', '); 
  };

  // Reset function to reset after win or out of guesses
  let reset = function() {
      guessesLeft = 5;
      guessedLetters = [];
      updatedGuessesLeft();
      updateLetterToGuess();
      updateGuessesSoFar();
  }

  