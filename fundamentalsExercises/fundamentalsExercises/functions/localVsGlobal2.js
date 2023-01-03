/*
What will the following code log to the console and why? Don't run the code until after you have tried to answer.
*/

var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
  console.log(myVar);
}

someFunction();

/*
This will output 'This is local' because javascript uses lexical scope/ scope chain which looks at the first variable it finds to get the value, in this case line first looks at it's own scope to find the myVar variable, it finds it on line 8, and outputs 'This is local' because the inner myVar shadowed the outer myVar

LS Solution:
There is only one small difference between this exercise and the previous one: this time, the console.log(myVar) expression is located inside of the function

Recall that there is a myVar variable in both the global scope (line 1) and a local scope (line 4). Supposedly, variables in the global scope are accessible from anywhere in the program. In this case however, JavaScript gives priority to the myVar in the local scope, since that's the same scope from which myVar is being referenced by console.log. Because it has the same name, the global myVar cannot be accessed from within the local scope of the function. This type of behavior is called variable shadowing.

*/