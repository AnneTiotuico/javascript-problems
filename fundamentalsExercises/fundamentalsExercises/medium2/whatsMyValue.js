/*
What will the following program log to the console? Can you explain why?
*/

const array = ['Apples', 'Peaches', 'Grapes'];

array[3.4] = 'Oranges';
console.log(array.length); // 3
console.log(Object.keys(array).length); // 4

array[-2] = 'Watermelon';
console.log(array.length); // 3
console.log(Object.keys(array).length); // 5

/*
It logs 3 first because we check the length of the array, and although we added a key value pair, it doesn't have a non negative integer key so it doesn't count towards the length of elements in the array.
But it logs 4 when checking the keys, because Object.keys() returns all keys in the array regardless if they are non negative integers.
We add another key value pair, but with a non negative integer so we again log 3 when passing in the array's length.
But log 5 since there is a new key present.

LS Solution:
Recall that Arrays are implemented with Objects internally in JavaScript. One thing that differentiates the two is that arrays have a length property, while objects do not. Arrays can be thought of as special objects that have only non-negative integer values (from 0 up to 2 32 - 1) as keys, and have an extra length property that keeps track of how many such key-value pairs exist in the object.

const array = ['Apples', 'Peaches', 'Grapes'];
array[3.4] = 'Oranges';
array[-2] = 'Watermelon';

console.log(array);  // ["Apples", "Peaches", "Grapes", 3.4: "Oranges", -2: "Watermelon"]

console.log(Object.keys(array));      // ["0", "1", "2", "3.4", "-2"]

// "0", "1", "2" are the indices/keys/property names for "Apples", "Peaches", "Grapes"
console.log(array[0]);                // Apples
console.log(array[1]);                // Peaches
console.log(array[2]);                // Grapes
console.log(array['2']);              // Grapes

// "3.4" and "-2" are keys/property names that exist in the 'Array Object'
console.log(array[3.4]);              // Oranges
console.log(array[-2]);               // Watermelon
console.log(array['-2']);             // Watermelon
*/