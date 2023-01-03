/*
We love to visit museums if they are about science or computers.
We're undecided when it comes to modern art, and would rather not go in most cases.
However, we're willing to go to any modern art museum that is about
Andy Warhol (we like him!) or that is located in nearby Amsterdam.
We'd rather skip any other museums.

We tried to implement these preferences in a function,
so we can automatically sort through long lists of museums and find the ones
that sound interesting. However, our Boolean check is flawed, as it fails
some of our test cases. Can you fix it?
*/

// function wantToVisit(museum, city) {
//   return museum.includes('Computer')
//       || museum.includes('Science')
//       && !(
//         museum.includes('Modern')
//         && museum.includes('Art')
//         && museum.includes('Andy Warhol')
//         || city === 'Amsterdam'
//       );
// }

// // Tests (should all print 'true')

// console.log(wantToVisit('Computer Games Museum', 'Berlin') === true);
// console.log(wantToVisit('National Museum of Nature and Science', 'Tokyo') === true);
// console.log(wantToVisit('Museum of Modern Art', 'New York') === false);
// console.log(wantToVisit('El Paso Museum of Archaeology', 'El Paso') === false);
// console.log(wantToVisit('NEMO Science Museum', 'Amsterdam') === true);
// console.log(wantToVisit('National Museum of Modern Art', 'Paris') === false);
// console.log(wantToVisit('Andy Warhol Museum of Modern Art', 'Medzilaborce') === true);
// console.log(wantToVisit('Moco: Modern Contemporary Art', 'Amsterdam') === true);
// console.log(wantToVisit('Van Gogh Museum', 'Amsterdam') === false);
// console.log(wantToVisit('Andy Warhol Museum', 'Melbourne') === false);

function wantToVisit(museum, city) {
  return museum.includes('Computer')
       || museum.includes('Science')
       || (museum.includes('Modern') && museum.includes('Art')
           && (museum.includes('Andy Warhol') || city === 'Amsterdam'));
}

console.log(wantToVisit('Computer Games Museum', 'Berlin') === true);
console.log(wantToVisit('National Museum of Nature and Science', 'Tokyo') === true);
console.log(wantToVisit('Museum of Modern Art', 'New York') === false);
console.log(wantToVisit('El Paso Museum of Archaeology', 'El Paso') === false);
console.log(wantToVisit('NEMO Science Museum', 'Amsterdam') === true);
console.log(wantToVisit('National Museum of Modern Art', 'Paris') === false);
console.log(wantToVisit('Andy Warhol Museum of Modern Art', 'Medzilaborce') === true);
console.log(wantToVisit('Moco: Modern Contemporary Art', 'Amsterdam') === true);
console.log(wantToVisit('Van Gogh Museum', 'Amsterdam') === false);
console.log(wantToVisit('Andy Warhol Museum', 'Melbourne') === false);

/*


LS Solution:
function wantToVisit(museum, city) {
  return  museum.includes('Computer')
       || museum.includes('Science')
       || (museum.includes('Modern')
          && museum.includes('Art')
          && (museum.includes('Andy Warhol')
             || city === 'Amsterdam'));
}

Our initial logic isn't quite right. We intend to look for computer or science
museums or modern art museums with particular qualities, but our Boolean
expression instead checks for museums that are about computers or science and
are not modern art museums.

After removing the logical not operator (!) and replacing the relevant && with
the logical or operator (||), one test case still fails. The reason is that
we need to use parentheses to be explicit about the order in which we want our
logical expressions to be evaluated. One issue to pay special attention to when
working with logical expressions is operator precedence. In particular,
note that && has a higher precedence than ||.

Further Exploration
If you found this code difficult to parse, don't worry:
complex Boolean expressions require a significant cognitive load,
and it's worth the effort to make them easier to digest. Here is one example
that refactors our code in an attempt to make it clearer without changing the logic.
It's not perfect, but we hope it gives you an idea of how the original expression
could be broken down.


function wantToVisit(museum, city) {
  function contains(string, substring) {
    return string.toLowerCase().match(substring.toLowerCase()) != null;
  }

  const aboutComputers = contains(museum, 'Computer');
  const aboutScience = contains(museum, 'Science');
  const aboutModernArt = contains(museum, 'Modern') && contains(museum, 'Art');
  const aboutAndyWarhol = contains(museum, 'Andy Warhol');
  const inAmsterdam = (city === 'Amsterdam');

  const mustGo =  aboutComputers || aboutScience;
  const worthAnException = aboutModernArt && (aboutAndyWarhol || inAmsterdam);
  return mustGo || worthAnException;
}

*/

