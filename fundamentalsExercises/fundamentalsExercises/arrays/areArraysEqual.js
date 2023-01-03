/*
The array comparison function that we implemented in the Arrays lesson
(Alternate link if the previous link doesn't work) implicitly assumed that
when comparing two arrays, any matching values must also have matching index
positions. The objective of this exercise is to reimplement the function so
that two arrays containing the same values—but in a different order—are
considered equal. For example, [1, 2, 3] === [3, 2, 1] should return true.
*/

function areArraysEqual(array1, array2) {
  let arr1 = array1.slice().sort();
  let arr2 = array2.slice().sort();

  for (let index = 0; index < arr1.length; index++) {
    if (arr1[index] !== arr2[index]) return false;
  }

  return true;
}

console.log(areArraysEqual([1, 2, 3], [1, 2, 3]));                  // true
console.log(areArraysEqual([1, 2, 3], [3, 2, 1]));                  // true
console.log(areArraysEqual(['a', 'b', 'c'], ['b', 'c', 'a']));      // true
console.log(areArraysEqual(['1', 2, 3], [1, 2, 3]));                // false
console.log(areArraysEqual([1, 1, 2, 3], [3, 1, 2, 1]));            // true
console.log(areArraysEqual([1, 2, 3, 4], [1, 1, 2, 3]));            // false
console.log(areArraysEqual([1, 1, 2, 2], [4, 2, 3, 1]));            // false
console.log(areArraysEqual([1, 1, 2], [1, 2, 2]));                  // false
console.log(areArraysEqual([1, 1, 1], [1, 1]));                     // false
console.log(areArraysEqual([1, 1], [1, 1]));                        // true