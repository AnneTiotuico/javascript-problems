/*
Write a function like the previous one, except this time return the last count elements as a new array.
*/

// function lastNOf(arr, count) {
//   return arr.slice(arr.length - count);
// }

// let digits = [4, 8, 15, 16, 23, 42];
// console.log(lastNOf(digits, 3));    // returns [16, 23, 42]


/*
Using the function from the previous problem, What happens if you pass a count greater than the length of the array? How can you fix the function so it returns a new instance of the entire array when count is greater than the array length?

*/

function lastNOf(arr, count) {
  if (count >= arr.length) return arr.slice(0);
  return arr.slice(arr.length - count);
}

let digits = [4, 8, 15, 16, 23, 42];
console.log(lastNOf(digits, 20));    // returns [4, 8, 15, 16, 23, 42]