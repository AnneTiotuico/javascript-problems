/*
Write a function named splice that accepts three arguments: an Array,
a start index, and the number of values to remove. The function should remove
values from the original Array, starting with the first index and removing the
specified number of values. The function should return the removed values in
a new Array.

You may use functions that were answers to previous practice problems to
complete this problem, but do not use any built-in Array methods.

algorithm:
to only include non removed items in origArray:
2 indexes: one is the index of origArray, other is index2 of modified arr
start at index1 0
assign index2 0 to the arr[index1] and add 1 to each index
but if index 1 >= start and index 1 <= (start + num), only increment index1

reassign current array length to start
reassign the current array from index 0 up to given start

then start assigning arr[start] to arr[start + end]
and increment

*/

function slice(arr, start, end) {
  let newArr = [];

  let index2 = 0;
  for(let index = start; index < end; index++) {
    newArr[index2] = arr[index];
    index2 += 1;
  }

  return newArr;
}

// function splice(arr, start, num) {
//   let origElements = slice(arr, 0, arr.length);
//   let removedArr = [];

//   for (let index = start, index2 = 0; index < (start + num); index++, index2++) {
//     removedArr[index2] = arr[index];
//   }

//   arr.length = arr.length - num;

//   for (let index = 0, index2 = 0; index2 < origElements.length; index2++) {
//     if (index2 >= start && index2 < (start + num)) {
//       continue;
//     } else {
//       arr[index] = origElements[index2];
//       index += 1;
//     }
//   }

//   return removedArr;
// }

// refactored:
function splice(arr, start, num) {
  let origElements = slice(arr, 0, arr.length);
  let removedArr = slice(arr, start, start + num);

  arr.length = arr.length - num;

  for (let index = 0, index2 = 0; index2 < origElements.length; index2++) {
    if (index2 >= start && index2 < (start + num)) {
      continue;
    } else {
      arr[index] = origElements[index2];
      index += 1;
    }
  }

  return removedArr;
}


// other approach:

// function push(arr, value) {
//   arr[arr.length] = value;
//   return arr.length;
// }

// function splice(arr, start, num) {
//   let removedArr = [];
//   let leftOver = [];

//   for (let index = 0; index < arr.length; index++) {
//     if (index >= start && index < (start + num)) {
//       push(removedArr, arr[index]);
//     } else {
//       push(leftOver, arr[index]);
//     }
//   }

//   arr.length = arr.length - num;

//   for (let index = 0; index < leftOver.length; index++) {
//     arr[index] = leftOver[index];
//   }

//   return removedArr;
// }

let count = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(splice(count, 2, 5));                   // [ 3, 4, 5, 6, 7 ]
console.log(count);                                 // [ 1, 2, 8 ]