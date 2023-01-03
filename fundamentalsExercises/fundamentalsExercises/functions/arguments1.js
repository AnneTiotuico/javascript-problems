/*
What will the following code log to the console and why? Don't run the code until after you have tried to answer.
*/

let a = 7;

function myValue(b) {
  b += 10;
}

myValue(a);
console.log(a);

/*
This will log 7 because `a` is assigned to the primitive value 7 and although we pass in `a` to the myValue function,
that function does not mutate the object passed in, but instead reassigns
it to the variable b.

LS Solution:
The code logs 7 to the console. The value assigned to variable a is 7 and it is a primitive value. Primitive values in JavaScript are immutable. Therefore, passing the variable a that is assigned a primitive value as an argument to a function, and consequently using it on any operation in the body of the function does not have any effect on the value assigned to a.
*/