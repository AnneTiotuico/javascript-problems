/*
The function placeABet below accepts a guess from the user between 1 and 25.
The function should determine a winning number and return a message to the user
indicating whether he/she entered a winning guess. When you try to invoke
placeABet, an error is raised. Fix the bug and explain what caused it.
*/

// function placeABet(guess) {
//   (function generateRandomInt() {
//     return Math.floor(Math.random() * 25) + 1;
//   });

//   const winningNumber = generateRandomInt();

//   if (guess < 1 || guess > 25) {
//     return 'Invalid guess. Valid guesses are between 1 and 25.';
//   }

//   if (guess === winningNumber) {
//     return "Congratulations, you win!";
//   } else {
//     return "Wrong-o! You lose.";
//   }
// }

// const userGuess = parseInt(prompt('Input a guess between 1-25'), 10);
// alert(placeABet(userGuess));

/*
The error is caused by the function generateRandomInt() being wrapped in parens
which makes it an immediately invoked function expression which creates its own scope,
so when we try to invoke it and get its return value to save into the winningNumber
variable, it isn't in scope

We can just remove the parens to make the program run.

*/

function placeABet(guess) {
  function generateRandomInt() {
    return Math.floor(Math.random() * 25) + 1;
  }

  const winningNumber = generateRandomInt();

  if (guess < 1 || guess > 25) {
    return 'Invalid guess. Valid guesses are between 1 and 25.';
  }

  if (guess === winningNumber) {
    return "Congratulations, you win!";
  } else {
    return "Wrong-o! You lose.";
  }
}

const userGuess = parseInt(prompt('Input a guess between 1-25'), 10);
alert(placeABet(userGuess));

// or we can invoke it like an immediately invoked function expression:
// function placeABet(guess) {
//   const winningNumber = (function generateRandomInt() {
//     return Math.floor(Math.random() * 25) + 1;
//   })();

//   if (guess < 1 || guess > 25) {
//     return 'Invalid guess. Valid guesses are between 1 and 25.';
//   }

//   if (guess === winningNumber) {
//     return "Congratulations, you win!";
//   } else {
//     return "Wrong-o! You lose.";
//   }
// }

// const userGuess = parseInt(prompt('Input a guess between 1-25'), 10);
// alert(placeABet(userGuess));


/*
LS Solution:

The original code mixes up function declarations and function expressions.
Because generateRandomInt is wrapped in parentheses in our original code,
it is a function expression rather than a function declaration.
Function expressions are often unnamed. They can be given a name,
like generateRandomInt, but the name is only available from inside the function.
This is why line 6 raised an error, telling you that generateRandomInt is undefined.

Now may be a good time to review the assignment on Function Declarations
and Function Expressions (use this link if the other one doesn't work for you).
*/