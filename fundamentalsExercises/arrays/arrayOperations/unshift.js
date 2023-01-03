/*
Write a function named unshift that accepts two arguments: an Array and a value.
The function should insert the value at the beginning of the Array, and return
the new length of the array. You will need a for loop for this problem.

algorithm:
start at the end of the array
iterate through the array with index where index is the length of the array
since we want to add one more item, and increase the length by 1
reassign that current index to the last item in the current array and continue
moving backwards by decrementing the index by 1 after each iteration

at the end, we assign index 0 to the value given
then return new arr's length

*/

function unshift(arr, value) {
  for (let index = arr.length; index > 0; index--) {
    arr[index] = arr[index - 1];
  }

  arr[0] = value;

  return arr.length;
}

let count = [1, 2, 3];
console.log(unshift(count, 0));      // 4
console.log(count);                  // [ 0, 1, 2, 3 ]