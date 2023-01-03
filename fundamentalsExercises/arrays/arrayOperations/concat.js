/*
Write a function named concat that accepts two Array arguments. The function
should return a new Array that contains the values from each of the original
Arrays.

You may use functions that were answers to previous practice problems to
complete this problem, but do not use any built-in Array methods.
*/

function push(arr, value) {
  arr[arr.length] = value;
  return arr.length;
}

function concat(arr1, arr2) {
  let newArr = [];

  for (let index = 0; index < arr1.length; index++) {
    push(newArr, arr1[index]);
  }

  for (let index = 0; index < arr2.length; index++) {
    push(newArr, arr2[index]);
  }

  return newArr;
}

console.log(concat([1, 2, 3], [4, 5, 6]));       // [ 1, 2, 3, 4, 5, 6 ]