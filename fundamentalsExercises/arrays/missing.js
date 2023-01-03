/*
Write a function that takes a sorted array of integers as an argument,
and returns an array that includes all the missing integers (in order)
between the first and last elements of the argument.

problem:
sort the current arr
create newArr empty arr
iterate through the sorted nums starting from the smallest num
push num into newArr if it isn't already in the original arr

return newArr

*/

function missing(arr) {
  let newArr = [];

  for (let num = arr[0]; num < arr[arr.length - 1]; num++) {
    if (!arr.includes(num)) { newArr.push(num) }
  }

  return newArr;
}

console.log(missing([-3, -2, 1, 5]));                  // [-1, 0, 2, 3, 4]
console.log(missing([1, 2, 3, 4]));                    // []
console.log(missing([1, 5]));                          // [2, 3, 4]
console.log(missing([6]));                             // []