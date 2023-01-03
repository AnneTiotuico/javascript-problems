const rlSync = require('readline-sync');

function guessPassword() {
	const password = 'password';
	let guesses = 0;
	
	while (guesses < 3) {
		let guess = rlSync.question('What is the password: ');
		guesses += 1;
		
		if (guess === password) {
			console.log('You have successfully logged in.');
			break;
		}
	}
	
	if (guesses === 3) {
		console.log('You have been denied access.');
	}
}

guessPassword();