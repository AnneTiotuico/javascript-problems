/*
problem:
given two strings, str1 and str2, check if str1 begins with str2,
if it does, return true, else false

examples:
let str = 'We put comprehension and mastery above all else';
startsWith(str, 'We');              // true
startsWith(str, 'We put');          // true
startsWith(str, '');                // true
  -if str2 is empty, return true
startsWith(str, 'put');             // false
  -false because 'put' is preceded with 'We '

let longerString = 'We put comprehension and mastery above all else!';
startsWith(str, longerString);      // false
  -false because str2 includes an '!'
  
data structures:
strings
booleans

algorithm:
create a function that takes two strings and returns a boolean
true if str1 begins with str2, false otherwise
create a guard clause that returns true if str2 is empty
create guard clause to return false if str2 is longer than str1
get length of str2
create variable currentString to empty string
iterate through str1 char by char up to str2's length - 1
concatenate char to currentString after each iteration
at the end of iteration, check if currentString is equal to str2
return true if yes, return false if not

*/

// function startsWith(string, searchString) {
//   let searchStringLength = searchString.length;
  
//   if (string.length < searchStringLength) {
//     return false; 
//   } 
  
//   let currentString = '';
  
//   for (let i = 0; i < searchStringLength; i++) {
//     currentString += string[i]; 
//   }

//   return currentString === searchString;
  
// }

// algorithm:
// given two strings, str1 str2
// check if str1 begins with str2, return true if yes, false if not
// iterate through str1 up to the length of str1 - 1
// compare char of str1 to str2 
// return false once they dont match
// return true after all iterations if false is never returned


function startsWith(string, searchString) {
for (let i = 0; i < searchString.length; i++) {
    if (string[i] !== searchString[i]) {
      return false; 
    }
  }

  return true; 
}

let str = 'We put comprehension and mastery above all else';
console.log(startsWith(str, 'We'));              // true
console.log(startsWith(str, 'We put'));          // true
console.log(startsWith(str, ''));                // true
console.log(startsWith(str, 'put'));             // false

let longerString = 'We put comprehension and mastery above all else!';
console.log(startsWith(str, longerString));      // false