/*
What will the following code log to the console and why? Don't run the code until after you have tried to answer.
*/

console.log(a);

var a = 1;

/*
This will log undefined because var a; will be hoisted up above the console.log(a), and at this point because var is used, a is undefined since the don't assign it a variable until after the console.log.

LS Solution:
Behind the scenes, the JavaScript interpreter does many things, and one of them is hoisting. To begin to understand this concept, let's dissect what happens during a variable declaration.

On line 3, the program initializes the variable a to a value of 1. Dissecting this, there are actually two things happening here: (1) the variable a is declared and, (2) a is assigned a value of 1.

Knowing this, we can now define hoisting. The JavaScript interpreter doesn't "immediately" execute all of a program's code line by line. Instead, it first goes over the code to find and associate variable declarations with their appropriate scope. Visually, this is as if JavaScript moves (or "hoists") each variable declaration to the top of its scope. The assignment operation, however, is not hoisted.

Here is the code after hoisting:
var a;
console.log(a);

a = 1;

Given this new code, it becomes apparent why the program logs undefined on line 2: the assignment of 1 to a has not yet occurred.
*/