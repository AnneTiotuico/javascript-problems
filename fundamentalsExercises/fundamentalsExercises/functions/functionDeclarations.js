/*
What will the following code log to the console and why? Don't run the code until after you have tried to answer.
*/

logValue();

function logValue() {
  console.log('Hello, world!');
}

/*
This will log 'Hello World!' because the function declaration will be hoisted
above the function invocation.

LS Solution:
Recall from the previous exercise that hoisting is the process of finding and associating variable declarations with their respective scope—prior to the execution of all other code. In addition to variable declarations, the JavaScript interpreter also hoists function declarations. However, in contrast to how only the name of a variable is hoisted, with function declarations everything is hoisted, including both the function name and body. This means that the program can execute a function even before declaring it.

Here is the code after hoisting:
function logValue() {
  console.log('Hello, world!');
}

logValue();
*/

//Further Exploration
// Let's refactor the code a bit. What does it log now? What is the hoisted equivalent of this code?

var logValue = 'foo';

function logValue() {
  console.log('Hello, world!');
}

console.log(typeof logValue);

// For insight into the answer to this question, revisit the lesson on hoisting.

/*
This logs string because this is the code after hoisting:
function logValue() {
  console.log('Hello, world!');
}

var logValue;
logValue = 'foo';
console.log(typeof logValue); // at this point logValue is now a string
*/