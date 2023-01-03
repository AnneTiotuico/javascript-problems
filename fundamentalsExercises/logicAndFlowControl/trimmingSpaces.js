/*
given a string, remove all surrounding spaces, leave space in between non space characters
if given empty string or string w only spaces, return empty string
input: string
output: string

iterate through the string from the beginning,
if char is a space, continue
if char isn't a space, save current char up to end of string to result
since we can't remove spaces in between chars

take result and iterate from the end, continue while char is a space
if not a space, get the index of that non space char

to get final result start from index 0 of result up to the index of that non space char

*/

function leftTrim(string) {
	let result = '';
	
	for (let index = 0; index < string.length; index++) {
		if (string[index] === ' ' && result.length === 0) {
			continue;
		} else {
			result += string[index];
		}
	}
	
	return result;
}

function rightTrim(string) {
	let result = '';
	let indexOfLastChar;
	
	for (let index = string.length - 1; index >= 0; index--) {
		if (string[index] === ' ' && result.length === 0) {
			continue;
		} else {
			indexOfLastChar = index;
			break;
		}
	}
	
	for (let index = 0; index <= indexOfLastChar; index++) {
		result += string[index];
	}
	
	return result;
}

function trim(string) {
	let trimmedLeft = leftTrim(string);
	let result = rightTrim(trimmedLeft);
	
	console.log(result);
}

trim('  abc  ');  // "abc"
trim('abc   ');   // "abc"
trim(' ab c');    // "ab c"
trim(' a b  c');  // "a b  c"
trim('      ');   // ""
trim('');         // ""