/*
What does the following code log? Why is this so?
*/

let startingBalance = 1;
const chicken = 5;
const chickenQuantity = 7;

function totalPayable(item, quantity) {
  return startingBalance + (item * quantity);
}

startingBalance = 5;
console.log(totalPayable(chicken, chickenQuantity)); // logs 40
// 5 + (5 * 7) = 40

startingBalance = 10;
console.log(totalPayable(chicken, chickenQuantity)); // logs 45
// 10 + (5 * 7) = 45

/*
It first logs 40 because startingBalance is a global variable and is first assigned to 1
but then gets reassigned to 5 right before the first console.log so
in the function totalPayable, startingBalance is 5 which gives us
5 + (5 * 7) = 40

Then after that log, startingBalance gets reassigned to 10
so when we call the function again and log the return value, we have 10 + (5 * 7) = 45



LS Solution:
Solution
This code logs 40 and 45.

Discussion
You may want to review the concept of closures. Closures have functions
"retain access" to variables defined in an "enclosing scope".
In the code above, the enclosing scope is the global (window) scope containing
the variables startingBalance, chicken, and chickenQuantity. Retaining access
means that a variable's value is not fixed at the time when the function is
defined or first executed. Instead, the variable's value is dynamically looked
up each time the function is called. Therefore, the value of startingBalance
on line 6 is not 1; instead, the value is a reference to the value stored in
the startingBalance variable in the global scope.

As a result of how closures work, the first time the totalPayable function
is called, the value of startingBalance is 5; the second time the function
is called, the value of startingBalance is 10.
*/