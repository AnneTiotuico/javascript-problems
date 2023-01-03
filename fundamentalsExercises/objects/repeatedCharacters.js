/*
Implement a function that takes a String as an argument and returns an object that contains a count of the repeated characters.

Note that repeatedCharacters does a bit more than simply count the frequency of each character: it determines the counts, but only returns counts for characters that have a count of 2 or more. It also ignores the case.
*/

// function repeatedCharacters(str) {
//   let chars = str.split('');
//   let counts = {};

//   for (let char of chars) {
//     counts[char.toLowerCase()] ? counts[char.toLowerCase()] += 1 : counts[char.toLowerCase()] = 1;
//   }

//   for (let key in counts) {
//     if (counts[key] < 2) delete counts[key];
//   }

//   return counts;
// }

// Using regex:
function repeatedCharacters(str) {
  let countTwo = {};
  for (let letter of str) {
    let matches = str.match(new RegExp(letter, "ig"));
    if (matches.length >= 2) countTwo[letter.toLowerCase()] = matches.length;
  }

  return countTwo;
}

console.log(repeatedCharacters('Programming'));    // { r: 2, g: 2, m: 2 }
console.log(repeatedCharacters('Combination'));    // { o: 2, i: 2, n: 2 }
console.log(repeatedCharacters('Pet'));            // {}
console.log(repeatedCharacters('Paper'));          // { p: 2 }
console.log(repeatedCharacters('Baseless'));       // { s: 3, e: 2 }