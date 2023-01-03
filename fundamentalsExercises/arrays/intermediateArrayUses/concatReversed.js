/*

Write a function that takes an array argument and returns a new array that contains all the argument's elements in their original order followed by all the argument's elements in reverse order.
*/

function concatReversed(arr) {
  let newArr = arr.slice(0);

  for (let index = arr.length - 1; index >= 0; index--) {
    newArr.push(arr[index]);
  }

  return newArr;
}

console.log(concatReversed([1,2,3]));
