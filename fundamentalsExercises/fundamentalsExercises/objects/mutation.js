/*
What will the following code log to the console and why? Don't run the code until after you have tried to answer.
*/

const array1 = ['Moe', 'Larry', 'Curly', 'Shemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo'];
const array2 = [];

for (let i = 0; i < array1.length; i += 1) {
  array2.push(array1[i]);
}

for (let i = 0; i < array1.length; i += 1) {
  if (array1[i].startsWith('C')) {
    array1[i] = array1[i].toUpperCase();
  }
}

console.log(array2);

/* This will log ['Moe', 'Larry', 'Curly', 'Shemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo']; because array2 is a copy of the elements in array1 and the elements pushed in are primitive/immutable strings. Although we modify array1, array2 isn't affected because it is not pointing to the same object as array 1

LS Solution:
["Moe", "Larry", "Curly", "Shemp", "Harpo", "Chico", "Groucho", "Zeppo"]

If you expected array2 to remain unchanged, then you are correct. But why should this be the case if array1 is an object? This is because even though array1 is an object and thus mutable, its elements are string primitives and thus immutable.


Further Exploration
What would happen if an object literal was part of the array1 elements pushed to array2? Would changes made to the object literal in array1 be reflected in array2?

Yes, because each array would share a reference to that object so any changed made in one will be reflected in the other:
const array1 = ['Moe', 'Larry', 'Curly', 'Shemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo', {name: 'test'}];
const array2 = [];

for (let i = 0; i < array1.length; i += 1) {
  array2.push(array1[i]);
}

for (let key in array1) {
  if (array1[key]['name']) {
    array1[key]['name'] = 'changed'
  }
}

console.log(array2); // will log:
['Moe', 'Larry', 'Curly', 'Shemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo', {name: 'changed'}];


How would you change the code so that any changes made to array1 in the second for loop get reflected to array2?
instead of pushing a copy of each element we can just assign array2 to point to array1 so that they are pointing to the same object.

const array1 = ['Moe', 'Larry', 'Curly', 'Shemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo'];
const array2 = array1;

for (let i = 0; i < array1.length; i += 1) {
  if (array1[i].startsWith('C')) {
    array1[i] = array1[i].toUpperCase();
  }
}

console.log(array2); // this will reflect the changes made to array1, where all names starting with C are uppercased

*/