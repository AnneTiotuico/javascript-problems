/*
Write a function that takes an array, and returns a new array with duplicate
elements removed.
*/

function uniqueElements(arr) {
  let newArr = [];
  for (let index in arr) {
    if (!newArr.includes(arr[index])) {
      newArr.push(arr[index]);
    }
  }

  return newArr;
}


console.log(uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]));  // returns [1, 2, 4, 3, 5]

