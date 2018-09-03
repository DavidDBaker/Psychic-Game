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