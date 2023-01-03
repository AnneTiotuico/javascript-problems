/*
Write a function named join that accepts two arguments: an Array and a String.
The function should coerce each value in the Array to a String, and then join
those values together using the second argument as a separator. You may assume
that a separator will always be passed.

You can call the String function on any JavaScript value to get its String representation.


*/


function join(arr, string) {
  let result = '';
  for (let index = 0; index < arr.length; index++) {
    result += String(arr[index]);
    if (index <  arr.length - 1) result += string;
  }

  return result;
}

console.log(join(['bri', 'tru', 'wha'], 'ck '));       // 'brick truck wha'
console.log(join([1, 2, 3], ' and '));                 // '1 and 2 and 3'