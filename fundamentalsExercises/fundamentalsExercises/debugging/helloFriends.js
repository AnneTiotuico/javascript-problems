/*
You have written basic functions to display a random greeting to any number of
friends upon each invocation of greet. Upon invoking the greet function,
however, the output is not as expected. Figure out why not and fix the code.
*/

// function randomGreeting() {
//   const words = ['Hello', 'Howdy', 'Hi', 'Hey there', 'What\'s up',
//               'Greetings', 'Salutations', 'Good to see you'];

//   const idx = Math.floor(Math.random() * words.length);

//   words[idx];
// }

// function greet(...args) {
//   const names = Array.prototype.slice.call(args);

//   for (let i = 0; i < names.length; i++) {
//     const name = names[i];
//     const greeting = randomGreeting;

//     console.log(`${greeting}, ${name}!`);
//   }
// }

// greet('Hannah', 'Jose', 'Beatrix', 'Julie', 'Ian');

// missing explicit return in randomGreeting() and missing () when trying to invoke
//randomGreeting() and saving the return value to const greeting

function randomGreeting() {
  const words = ['Hello', 'Howdy', 'Hi', 'Hey there', 'What\'s up',
               'Greetings', 'Salutations', 'Good to see you'];

  const idx = Math.floor(Math.random() * words.length);

  return words[idx];
}

function greet(...args) {
  const names = Array.prototype.slice.call(args);

  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const greeting = randomGreeting();

    console.log(`${greeting}, ${name}!`);
  }
}

greet('Hannah', 'Jose', 'Beatrix', 'Julie', 'Ian');

/*
LS Solution:
We must use parentheses in order to execute a function.
Otherwise greeting on line 16 is a function value and we log that function
value to the console.

After adding parentheses on line 16, randomGreeting is executed,
but we see that our output still doesn't look quite right:

undefined, Hannah!
undefined, Jose!
undefined, Beatrix!
undefined, Julie!
undefined, Ian!

It looks like our randomGreeting method is returning undefined. Why is that?
Recall (use this link if the other one doesn't work for you) that
"If a function does not contain an explicit return statement, or the
return statement does not include a value, the function implicitly returns
the value undefined". randomGreeting lacks an explicit return statement.
After adding one on line 7, we see the expected output.

*/