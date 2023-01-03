/*
Write a function named shift that accepts one argument: an Array.
The function should remove the first value from the beginning of the Array
and return it.

algorithm:
create variable shifted and assign to the first item in the array, the item that
we are removing
start at the beginning of the array at index 0 until the arr's length
reassign the value at current index to the next item so that we don't include
the first item
increment index by 1 after each iteration

at the end, reassign length property to the length - 1
then return the shifted element


*/

function shift(arr) {
  let shifted = arr[0];
  for (let index = 0; index < arr.length; index++){
    arr[index] = arr[index + 1];
  }

  arr.length = [arr.length - 1];
  return shifted;
}

let count = [1, 2, 3];
console.log(shift(count));           // 1
console.log(count);                  // [ 2, 3 ]