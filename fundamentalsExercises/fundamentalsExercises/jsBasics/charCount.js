let rlSync = require('readline-sync');

function charCount() {
	let phrase = rlSync.question('Please enter a phrase: ');
	let noSpaces = phrase.replace(/[^a-zA-Z]/g, '');
	console.log(`There are ${noSpaces.length} characters in "${phrase}".`);
}


charCount();