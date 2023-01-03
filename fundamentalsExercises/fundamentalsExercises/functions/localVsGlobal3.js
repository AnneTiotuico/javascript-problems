/*
What will the following code log to the console and why? Don't run the code until after you have tried to answer.

*/

var myVar = 'This is global';

function someFunction() {
  myVar = 'This is local';
}

someFunction();
console.log(myVar);

/*
This will output 'This is local' because myVar is defined in the global scope, which means it is accessible anywhere in the program, including from inside the function. Then someFunction() is invoked, which reassigns myVar

LS Solution:
In contrast to the previous two exercises, this program only has one variable declaration, so there is only one myVar variable instead of two. Therefore, when someFunction is invoked, it reassigns a new string to the global myVar. This is possible because variables in the global scope can be accessed and modified from within an inner scope.

*/