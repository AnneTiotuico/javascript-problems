/*
Caroline has written a very simple function, includesFalse, that searches a
list of primitives for the boolean false. If false is found, the function
immediately returns true. If no occurrence of false has been found after
iterating through the entire array, the function returns false.

Caroline's last method invocation of includesFalse (line 15) doesn't
return what she expects. Why is that? Fix the code so that it behaves as intended.
*/

// function includesFalse(list) {
//   for (let i = 0; i < list.length; i++) {
//     let element = list[i];

//     if (element == false) {
//       return true;
//     }
//   }

//   return false;
// }
                                                                  // returns:
// includesFalse([8, null, 'abc', true, 'launch', 11, false]);       // true
// includesFalse(['programming', undefined, 37, 64, true, 'false']); // false
// includesFalse([9422, 'lambda', true, 0, '54', null]);             // true

// She uses loose equality which implicity coerces 0 to false which causes her
// if block to run an return true; we must use strict equality === to avoid implicit coercion


function includesFalse(list) {
  for (let i = 0; i < list.length; i++) {
    let element = list[i];

    if (element === false) {
      return true;
    }
  }

  return false;
}
                                                                  // returns:
includesFalse([8, null, 'abc', true, 'launch', 11, false]);       // true
includesFalse(['programming', undefined, 37, 64, true, 'false']); // false
includesFalse([9422, 'lambda', true, 0, '54', null]);             // true

/*
LS Solution:
The important distinction here is between what is known as the abstract equality
operator (==) and the strict equality operator (===). While both operators
compare for equality and return a boolean, there is an important difference in
the way they behave: When comparing for strict equality using ===,
the values are compared as-is. Values of different types will be considered unequal.

7 === '7' // false

When using abstract equality, however, JavaScript will try to convert our
values into a like type before performing the comparison.

7 == '7' // true

The above example may not seem too problematic, but in our original code,
the comparison of 0 == false is true, which causes our third method invocation
to return true. In order to see the expected behavior, we need to use === as
seen in the solution code.

We recommend using the strict equality operator (===) whenever possible
to avoid confusing behavior and hard-to-find bugs.

Further Exploration
For further reading, you can view the MDN documentation regarding equality comparisons.

*/