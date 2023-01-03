/*
The penultimate function takes a string as an argument and returns the next-to-last word in the string. The function assumes that "words" are any sequence of non-whitespace characters. The function also assumes that the input string will always contain at least two words. The penultimate function in the example below does not return the expected result. Run the code below, check the current result, identify the problem, explain what the problem is, and provide a working solution.
*/

// function penultimate(string) {
//   return string.split(' ')[-2];
// }

// console.log(penultimate('last word'));                    // expected: "last"
// console.log(penultimate('Launch School is great!'));      // expected: "is"

/*
The above logs undefined because the array resulting from string.split(' ') does not contain a property '-2'. This does not access the second to last item in the array, but looks for a value with property '-2' but returns undefined since it doesn't exist.

*/
// Working solution:

function penultimate(string) {
  let words = string.split(' ');
  return words[words.length - 2];
}

console.log(penultimate('last word'));                    // expected: "last"
console.log(penultimate('Launch School is great!'));      // expected: "is"

/*
LS Solution:
function penultimate(string) {
  return string.split(' ').slice(-2, -1)[0];
}

In JavaScript, unlike some other programming languages, using a negative index to access an array does not extract elements from the end, nor does it raise an error. Instead, performing such an action usually returns undefined, such as in the broken penultimate function above. This behavior is caused by the fact that in JavaScript, Arrays are Objects. By using -1 with bracket notation (e.g., myArray[-1]), we are actually telling JavaScript to access the property that has a key of '-1' and return that property's value.

To get the expected result, the solution uses the Array.prototype.slice method, which, unlike bracket notation, can be passed a negative index as an argument to extract elements from the end of an array. The main difference with slice is that we must provide an endingIndex as a second argument; otherwise the slice method assumes that we want to get all elements from the provided startingIndex up to the end of the array. For example, given the expression [1, 2, 3, 4, 5].slice(-2), the last two elements ([4, 5]) are returned. The solution passes -1 as the endingIndex, causing slice to stop at index -2 (the second-to-last element). This is because the slice method extracts the elements up to but not including the endingIndex. Following this, the solution uses bracket notation to extract the word from the single-element array returned by slice, and thus penultimate returns a string.

*/