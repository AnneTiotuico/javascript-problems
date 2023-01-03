/*
Write a function lastIndexOf that accepts two arguments: an array and a value.
The function returns the last index at which the value can be found in the
array, or -1 if the value is not present.
*/

function lastIndexOf(arr, value) {
  for (let index = arr.length - 1; index >= 0; index--) {
    if (arr[index] === value) return index;
  }

  return -1;
}

console.log(lastIndexOf([1, 2, 3, 3], 3));     // 3
console.log(lastIndexOf([1, 2, 3], 4));        // -1