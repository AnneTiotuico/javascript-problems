/*
given a string and delimiter,
split the string by the delimiter

input: 2 strings
output: strings

if second arg is ommitted, log 'ERROR: No delimiter'
if second arg is empty, log each char 
if second arg isn't found in string, log the whole string
if second arg is found at the beginning of string, log empty line before the whole string

iterate through string char by char using index


*/

// function splitString(string, delimiter) {
// 	if (delimiter === undefined) {
// 		console.log('ERROR: No delimiter'); 
// 	} else if (delimiter === '') {
// 		for (let index = 0; index < string.length; index++) {
// 			console.log(string[index]);
// 		}
// 	} else {
// 		let splitStrings = [];
// 		let currentString = '';
// 		for (let index = 0; index <= string.length; index++) {
// 			if (string[index] === delimiter && index === 0) {
// 				splitStrings.push('');
// 			} else if (string[index] !== delimiter && string[index] !== undefined) {
// 				currentString += string[index];
// 			} else if (string[index] === delimiter && index === string.length - 1) {
// 				continue;
// 			}	else {
// 				splitStrings.push(currentString);
// 				currentString = '';
// 			}
// 		}
// 		splitStrings.forEach(string => console.log(string));
		
// 	}
// }




function splitString(string, delimiter) {
  if (delimiter === undefined) {
    console.log('ERROR: No delimiter'); 
    return;
  } 
  
  let currentString = '';
  for (let index = 0; index < string.length; index++) {
    if (delimiter === '') {
      console.log(string[index]);
    } else if (string[index] === delimiter && index === 0) {
      console.log('');
    } else if (string[index] !== delimiter && string[index] != undefined) {
      currentString += string[index];
    } else {
      console.log(currentString);
      currentString = '';
    }    
  }
  

}

// splitString('abc,123,hello world', ',');
// // logs:
// // abc
// // 123
// // hello world

// splitString('hello');
// // logs:
// // ERROR: No delimiter

splitString('hello', '');
// logs:
// h
// e
// l
// l
// o

// splitString('hello', ';');
// logs:
// hello

// splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello