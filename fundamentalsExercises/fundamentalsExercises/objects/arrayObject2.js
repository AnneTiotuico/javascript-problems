/*
A user wrote a function that takes an array as an argument and returns its average. Given the code below, the user expects the average function to return 5. Is the user's expectation correct? Why or why not?
*/

// const myArray = [5, 5];
// myArray[-1] = 5;
// myArray[-2] = 5;

// function average(array) {
//   let sum = 0;

//   for (let i = -2; i < array.length; i += 1) {
//     sum += array[i];
//   }

//   return sum / array.length;
// }

// average(myArray);

/*
This will return 10 instead because they added key value pairs, that don't count as elements because they used non negative integers so although 20 is the sum of their function, the length is 2 because there are only 2 valid elements.

LS Solution:
10

An array property with a key of anything other than a non-negative integer is not counted as part of the array's length. Therefore in the code above, the length of the array is 2, instead of 4 like the user expected. So the expression in the return statement evaluates to 20 / 2 and the function returns 10.

Further Exploration
Refactor the average function so that it returns the result that the user expected, 5.

*/

const myArray = [5, 5];
myArray[-1] = 5;
myArray[-2] = 5;

function average(array) {
  let sum = 0;

  for (let i = -2; i < array.length; i += 1) {
    sum += array[i];
  }

  return sum / Object.keys(array).length;
}

console.log(average(myArray));