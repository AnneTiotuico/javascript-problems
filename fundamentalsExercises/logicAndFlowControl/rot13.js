/*
problem:
given a string of chars, if char is a letter in the modern english alphabet,
replace it the char 13 positions later in the alphabet
for ex, a becomes n
if you reach end of alphabet, continue to the beginning
for ex, o becomes b
preserve the case, so A becomes N while a becomes n
don't modify chars that aren't letters, like spaces and punctuation

examples:
[
  'A', 'B', 'C', 'D', 'E', 'F',
  'G', 'H', 'I', 'J', 'K', 'L',
  'M', 'N', 'O', 'P', 'Q', 'R',
  'S', 'T', 'U', 'V', 'W', 'X',
  'Y', 'Z'
]

o is index 14 
index 14 + 13 = 27
o becomes b index 1


if a, change to n
if A, change to A
if o, change to b
if O, change to B

data structures:
string
array

algorithm:
create an array of uppercase letters and lowercase letters
iterate through string with transformation
check if char is included in lower or upper alphabet
get index of char in alphabet and return char at index + 13
if char not included in either, return char
if index + 13 > 25
for ex 14 + 13 = 27
27 > 26
index should be 27-26

*/

// function getNewIndex(index) {
// 	const placesToRotate = 13;
// 	const alphabetLength = 26;
// 	const maxIndex = 25;
	
// 	let newIndex = index + placesToRotate;
	
// 	if (newIndex > maxIndex) {
// 		newIndex -= alphabetLength;
// 	}
	
// 	return newIndex;
// }

// function rot13(string) {
// 	const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");
// 	const upperAlphabet = lowerAlphabet.map(letter => letter.toUpperCase());
	
// 	let result = string.split('').map(char => {
// 		if (lowerAlphabet.includes(char)) {
// 			let newIndex = getNewIndex(lowerAlphabet.indexOf(char));
// 			return lowerAlphabet[newIndex];
// 		} else if (upperAlphabet.includes(char)) {
// 			let newIndex = getNewIndex(upperAlphabet.indexOf(char));
// 			return upperAlphabet[newIndex];
// 		} else {
// 			return char;
// 		}
// 	});
	
// 	return result.join('');
	
// }

// Refactored 
function rotatedChar(char) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const placesToRotate = 13;
  const index = alphabet.indexOf(char.toLowerCase());
  let newIndex = index + placesToRotate;
  
  if (newIndex > alphabet.length - 1) {
    newIndex -= alphabet.length;
  }
  
  return alphabet[newIndex];
}

function correctCase(char) {
  return char.match(/[A-Z]/) ? rotatedChar(char).toUpperCase() : rotatedChar(char);
}

function rot13(string) {
  let result = string.split('').map(char => {
    if (char.match(/[a-zA-Z]/)) {
      return correctCase(char);
    } else {
      return char;
    }
  });
  
  return result.join('');
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));

// logs:
// Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.

console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));

// logs:
// Teachers open the door, but you must enter by yourself.