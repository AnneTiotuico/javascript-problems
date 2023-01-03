/*
Read through the following code. Currently, it does not log the expected result.
Explain why this happens, then refactor the code so that it works as expected.
*/

// const person = { name: 'Victor' };
// const otherPerson = { name: 'Victor' };

// console.log(person === otherPerson);    // false -- expected: true

/*
This logs false because objects aren't primitive values and must point to the same
object in order to be equal. These are two different objects that happen to hold
the same property.
*/
//to fix:

const person = { name: 'Victor' };
const otherPerson = person;

console.log(person === otherPerson);

/*
LS Solution:
This code can be fixed by making sure that the two variables reference the
same object instead of two different objects with the same properties.

const person = { name: 'Victor' };
const otherPerson = person;

console.log(person === otherPerson);    // true

In JavaScript, every object literal creates a new object.
When this object is assigned to a variable, a reference to the object is
stored in that variable. In the example above, the only way to ensure that
the two variables compare equally is to have them reference the same object.
*/