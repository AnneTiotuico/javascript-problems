/*
Read through the following code. Why will it log 'debugging'?
*/

function debugIt() {
  const status = 'debugging';
  function logger() {
    console.log(status);
  }

  logger();
}

debugIt();

/*
Because we invoke the debugit function which invokes the logger function
which logs the variable status which points to the string 'debugging'. The variable is accessible because it is in the lexical scope when it is passed to console.log.


LS Solution:
On line 4, the status variable has a value of 'debugging' because of JavaScript's lexical scoping rules.

The debugIt function defines a local variable named status and a function named logger. logger is an inner (nested) function, so it has access to any variables declared in the scope of its outer (parent) function, debugIt, due to lexical scoping rules.
*/