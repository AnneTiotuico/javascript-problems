/*
problem:
given a string, convert that string to lowercase

*/


function toLowerCase(string) {
  let result = '';
  for (let i = 0; i < string.length; i++) {
  	let asciiNumeric = string[i].charCodeAt(0);
  	asciiNumeric += 32;
  	if (asciiNumeric <= 122 && asciiNumeric >= 97) {
  		result += String.fromCharCode(asciiNumeric);
  	} else {
  		result += string[i];
  	}
  }
  
  return result;
}

console.log(toLowerCase('ALPHABET'));    // "alphabet"
console.log(toLowerCase('123'));         // "123"
console.log(toLowerCase('abcDEF'));      // "abcdef"