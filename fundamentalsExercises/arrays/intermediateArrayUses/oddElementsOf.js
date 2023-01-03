/*
Write a function that creates and returns a new array from its array argument. The new array should contain all values from the argument array whose positions have an odd index.
*/


function oddElementsOf(arr) {
  let oddArr = [];
  for (let index = 0; index < arr.length; index++) {
    if (index % 2 === 1) oddArr.push(arr[index]);
  }

  return oddArr;
}

let digits = [4, 8, 15, 16, 23, 42];

console.log(oddElementsOf(digits));    // returns [8, 16, 42]