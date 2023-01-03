let myArray = [1, 2, 3, 4];
const myOtherArray = myArray;

myArray.pop();
console.log(myArray);
console.log(myOtherArray); // [1, 2, 3]

myArray = [1, 2];
console.log(myArray);
console.log(myOtherArray); // [1, 2, 3]

/*
Read through the code shown below. What does it log to the console at lines 6 and 10?


Both lines 6 and 10 log [1, 2, 3]
On line 1, we assign an array of numbers to the variable myArray.
On line 2, we assign a constant variable to the myArray variable which holds the
array of numbers. At this point, both myArray and myOtherArray point to the same array.

On line 4, we pop the last element in the array and now both myArray and
myOtherArray point to [1, 2, 3] so line 6 logs [1, 2, 3]

On line 8 we reassign the myArray variable to a different array [1, 2].
But myOtherArray still points to the original array [1, 2, 3] so line 10
logs [1, 2, 3]
*/