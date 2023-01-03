/*
In the previous exercise, the value of the reference gets copied.
For this exercise, only the values of the array should be copied, but not
the reference. Implement two alternative ways of doing this.

Here is the code from the previous exercise:

let myArray = [1, 2, 3, 4];
const myOtherArray = myArray;

myArray.pop();
console.log(myOtherArray);

myArray = [1, 2];
console.log(myOtherArray);
*/


// One way:
let myArray = [1, 2, 3, 4];
const myOtherArray = myArray.slice();

myArray.pop();
console.log(myOtherArray);

myArray = [1, 2];
console.log(myOtherArray);

// Another way:
// let myArray = [1, 2, 3, 4];
// const myOtherArray = [];

// for (let item of myArray) {
//   myOtherArray.push(item);
// }

// myArray.pop();
// console.log(myOtherArray);

// myArray = [1, 2];
// console.log(myOtherArray);