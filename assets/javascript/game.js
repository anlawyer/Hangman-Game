//Hello let's start making this game!

// VARIABLES

// word bank containing the words available to guess
var wordbank = [
	'yellow', 'green', 'orange', 'peach',
	'purple', 'blue', 'red', 'pear',
	'pink','magenta','cyan', 'coral',
	'mauve','aquamarine', 'ivy', 'amber',
	'taupe','maroon', 'gladiolus', 'olive',
	'charcoal','sunflower', 'seagreen',
	'ruby','diamond','emerald','daisy',
	'hydrangea','poppy','dahlia', 'fuchia',
	'rose','marigold','iris','carnation',
	'daffodil','tulip','lilac', 'indigo',
	'lily','peony','lavender', 'sage',
	];
		
//FUNCTIONS
	var score = 0;
	function setScore() {
		document.getElementById("wins").innerHTML = "Current score: " + score;
	}

	function setWord() {
		toGuess = '';
		toGuess = wordbank[Math.floor(Math.random() * (wordbank.length))];
	};

	function setUnderscores() {
		under = '';
		for (i = 0; i < toGuess.length; i++) {
			under = under + "_ ";
		};
		under = under.trim();
		document.getElementById("word").innerHTML = under;
	};

	function setNumGuesses() {
		guessesRemaining = 0;
		guessesRemaining = toGuess.length + 5;
		document.getElementById("remaining").innerHTML = "You have " + guessesRemaining + " guesses remaining.";
		console.log(guessesRemaining);
	};

	function clearGuessArray() {
		alreadyGuessed = [];
	}

	// check if letter already guessed, if not add to array
	function replaceWithLetter(press){
		// get all the indexes of the letter within the word
		for(var i = 0; i < toGuess.length; i++){
			if(toGuess[i] === press) {
				// create array out of current string
				var newUnder = under.split(" ");
				// add letter to proper location within underscore array
				newUnder.splice(i, 1, press);
				// turn array back into string and display on screen
				under = newUnder.join(' ');
				document.getElementById("word").innerHTML = under;
			};
		};
		if(under === toGuess.split('').join(' ')) {
			winner();
		};
	};

	function addToGuessed(x){
		var notInside = alreadyGuessed.indexOf(x);
		if(notInside === -1) { 
			alreadyGuessed.push(x);
			guessesRemaining = guessesRemaining - 1;
			document.getElementById("remaining").innerHTML = "You have " + guessesRemaining + " guesses remaining.";
		};
		if(guessesRemaining === 0) {
			loser();
		};
	};

	function loser() {
		alert("You lost! The word was " + toGuess + ".");
		restart();
	};

	function winner() {
		score = score + 1;
		alert("Nice, you got it!");
		restart();
	}

	function restart() {
		setWord();
		setUnderscores();
		setNumGuesses();
		setScore();
		clearGuessArray();
	};

	document.onkeyup = function(event) {

		var userInput = String.fromCharCode(event.keyCode).toLowerCase();
			// display already guessed letters on page
			addToGuessed(" " + userInput);
			document.getElementById("already").innerHTML = alreadyGuessed;
			replaceWithLetter(userInput);
	};

	window.onload = function gameStart() {
		setWord();
		setUnderscores();
		setNumGuesses();
		setScore();
		clearGuessArray();
	};









