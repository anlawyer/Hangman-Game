//Hello let's start making this game!

// VARIABLES

// word bank containing the words available to guess
var wordbank = [
	'yellow', 
	'green', 
	'orange', 
	'purple', 
	'blue', 
	'red', 
	'pink'];

// users start with a score of 0
var score = 0;

// current word being guessed
var toGuess = wordbank[Math.floor(Math.random() * (wordbank.length))];
	console.log(toGuess);
	console.log(toGuess.length);

// how many guesses the user has left
var guessesRemaining = toGuess.length + 6;
	console.log(guessesRemaining);

// empty string for underscores
var under = "";

// an empty array to store the letters that have already been guessed
var alreadyGuessed = [];

		
//FUNCTIONS
	// place underscores with proper length
	for (i = 0; i < toGuess.length; i++) {
		under = under + "_ ";
	};
	// console.log(under);

	// check if letter already guessed, if not add to array
	function addToGuessed(x){

		var notInside = alreadyGuessed.indexOf(x);

		if(notInside === -1) {
			// do push
			alreadyGuessed.push(x);
		}; // if inside, don't push
	};

	// how to make first letter press not appear in display on page???
	// this is just a copy of an empty array... next if statement will never run
	var copy = alreadyGuessed.slice();
	
	// i want this to take the first element off the array just once. 
	if(alreadyGuessed.length > 1) {
		copy.splice(0,1);
	};
		console.log(copy); // this just prints an empty array. 

	// i want to decrease the number of remaining guesses for each incorrect letter
	// that is, if the letter is not in the word, and if the letter is not
	// already in the array


// PROCESS
document.onkeyup = function(event) {

	var input = String.fromCharCode(event.keyCode).toLowerCase();

		// display underscores on page
		document.querySelector("#word").innerHTML = under;

		// display already guessed letters on page
		addToGuessed(" " + input)
		document.querySelector("#already").innerHTML = alreadyGuessed;
}




