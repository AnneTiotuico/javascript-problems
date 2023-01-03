/*
What will the following code log to the console and why? Don't run the code until after you have tried to answer.
*/

const myArray = ['a', 'b', 'c'];

console.log(myArray[0]); // 'a'
console.log(myArray[-1]); // undefined

myArray[-1] = 'd';
myArray['e'] = 5;
myArray[3] = 'f';

console.log(myArray[-1]); // 'd'
console.log(myArray['e']); //5
console.log(myArray); // ['a', 'b', 'c', 'f', '-1': 'd', 'e': 5]

/*
LS Solution:
line 3:  "a"
line 4:  undefined
line 10: "d"
line 11: 5
line 12: ["a", "b", "c", "f", "-1": "d", e: 5]

Arrays are JavaScript Objects! If you think about it from that perspective, it makes sense that using -1 as an "index" (or key), on line 4, does not return the last value of the array but instead returns undefined, which is the expected result when trying to access an object's property that is not defined or does not exist. If you take a look at the array logged on line 12, you can see that for any of its values that have a key (property name) of anything besides a non-negative integer, the key is also displayed when the array is logged.

*/