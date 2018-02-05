// VARIABLES
// word bank containing the words available to guess
const wordbank = [
  'yellow', 'green', 'orange', 'peach',
  'purple', 'blue', 'red', 'pear',
  'pink', 'magenta', 'cyan', 'coral',
  'mauve', 'aquamarine', 'ivy', 'amber',
  'taupe', 'maroon', 'gladiolus', 'olive',
  'charcoal', 'sunflower', 'seagreen',
  'ruby', 'diamond', 'emerald', 'daisy',
  'hydrangea', 'poppy', 'dahlia', 'fuchia',
  'rose', 'marigold', 'iris', 'carnation',
  'daffodil', 'tulip', 'lilac', 'indigo',
  'lily', 'peony', 'lavender', 'sage'
];

let score = 0;
let toGuess = '';
let under = '';
let guessesRemaining = 0;
let alreadyGuessed = [];

// FUNCTIONS
const setScore = () => {
  document.getElementById('score').innerHTML = 'Current score: ' + score;
};

const setWord = () => {
  toGuess = wordbank[Math.floor(Math.random() * (wordbank.length))];
};

const setUnderscores = () => {
  under = '';
  for (let i = 0; i < toGuess.length; i++) {
    under += '_ ';
  }
  under = under.trim();
  document.getElementById('word').innerHTML = under;
};

const setNumGuesses = () => {
  guessesRemaining = toGuess.length + 5;
  document.getElementById('remaining').innerHTML = 'You have ' + guessesRemaining + ' guesses remaining.';
};

const clearGuessArray = () => {
  alreadyGuessed = [];
};

// check if letter already guessed, if not add to array
const replaceWithLetter = press => {
  // get all the indexes of the letter within the word
  for (let i = 0; i < toGuess.length; i++) {
    if (toGuess[i] === press) {
      // create array out of current string
      var newUnder = under.split(' ');
      // add letter to proper location within underscore array
      newUnder.splice(i, 1, press);
      // turn array back into string and display on screen
      under = newUnder.join(' ');
      document.getElementById('word').innerHTML = under;
    }
  }
  if (under === toGuess.split('').join(' ')) {
    winner();
  }
};

const addToGuessed = x => {
  let notInside = alreadyGuessed.indexOf(x);
  if (notInside === -1) {
    alreadyGuessed.push(x);
    guessesRemaining = guessesRemaining - 1;
    document.getElementById('remaining').innerHTML = 'You have ' + guessesRemaining + ' guesses remaining.';
  }
  if (guessesRemaining === -1) {
    loser();
  }
};

const loser = () => {
  alert('You lost! The word was ' + toGuess + '.');
  restart();
};

const winner = () => {
  score += 1;
  alert('Nice, you got it!');
  restart();
};

const restart = () => {
  setWord();
  setUnderscores();
  setNumGuesses();
  setScore();
  clearGuessArray();
};

document.onkeyup = (event) => {
  var userInput = String.fromCharCode(event.keyCode).toLowerCase();
  // display already guessed letters on page
  addToGuessed(' ' + userInput);
  document.getElementById('alreadyGuessed').innerHTML = alreadyGuessed;
  replaceWithLetter(userInput);
};

window.onload = () => {
  // setWord();
  // setUnderscores();
  // setNumGuesses();
  // setScore();
  // clearGuessArray();
  restart();
};
