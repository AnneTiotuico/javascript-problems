/*
The getSelectedColumns function selects and extracts specific columns to a new array. Currently, the function is not producing the expected result. Go over the function and the sample runs shown below. What do you think the problem is?
*/

function getSelectedColumns(numbers, cols) {
  var result = [];

  for (var i = 0, length = numbers.length; i < length; i += 1) {
    for (var j = 0, length = cols.length; j < length; j += 1) {
      if (!result[j]) {
        result[j] = [];
      }

      result[j][i] = numbers[i][cols[j]];
    }
  }

  return result;
}

// given the following arrays of number arrays
const array1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const array2 = [[1, 2, 3], [1, 2, 3], [1, 2, 3]];

// `array1` in row/column format
// [[1, 2, 3],
//  [4, 5, 6],
//  [7, 8, 9]]

getSelectedColumns(array1, [0]);     // [[1]];            expected: [[1, 4, 7]]
getSelectedColumns(array1, [0, 2]);  // [[1, 4], [3, 6]]; expected: [[1, 4, 7], [3, 6, 9]]
getSelectedColumns(array2, [1, 2]);  // [[2, 2], [3, 3]]; expected: [[2, 2, 2], [3, 3, 3]]

/*
We are getting an unwanted result because we are reassigning the var variable length in the nested for loop. Because we initially assigned length in the outer loop with var, this means that length is function scoped, so the nested loop has access to reassign it. If we renamed the inner length to length2 or any other name other than length, this would work. We could also use let instead of var so that the variable is block scoped rather than function scoped, it would make the variable local to its own for loop.


LS Solution:

The problem is that the length variable is reassigned a new value in the second loop.

Discussion
The intention of declaring the variable length is to save on repetitive calls to the .length property. However, we are declaring length with the var keyword, which gives it function scope. As a result, the two declarations of length only create one length variable that is used in both loops. Thus, on line 5, we're reassigning the same variable used on line 4.

To resolve this, we can declare the variables using let. Variables declared with let have block scope, so the length variable in the inner loop is different from the length variable in the outer loop.


// Possible Solution
function getSelectedColumns(numbers, cols) {
  const result = [];

  for (let i = 0, length = numbers.length; i < length; i += 1) {
    for (let j = 0, length = cols.length; j < length; j += 1) {
      if (!result[j]) {
        result[j] = [];
      }

      result[j][i] = numbers[i][cols[j]];
    }
  }

  return result;
}
*/