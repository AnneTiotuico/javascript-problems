/*
Run the following code. Why is every warning displayed twice?
Change the code so that each warning is displayed only once, as intended.
*/

// const species = ['wolf', 'human', 'wasp', 'squirrel', 'weasel', 'dinosaur'];
// const isMidnight = true;
// const isFullmoon = true;

// function isTransformable(species) {
//   return species[0] === 'w';
// }

// function transform(species) {
//   return `were${species}`;
// }

// for (let index = 0; index < species.length; index++) {
//   const thisSpecies = species[index];
//   var newSpecies;

//   if (isMidnight && isFullmoon && isTransformable(thisSpecies)) {
//     newSpecies = transform(thisSpecies);
//   }

//   if (newSpecies) {
//     console.log(`Beware of the ${newSpecies}!`);
//   }
// }

/*
it prints the warning twice because once we find a transformable species,
it keeps that string in the newSpecies variable so if (newSpecies) always runs
since we never reassign it to an empty string or a falsy value if the species
is not transformable. So we can use var newSpecies = '' so it resets the value
to falsy after every iteration and will only be truthy if the if(isMidnight...)
block runs and reassigns newSpecies to a truthy value/transformable species.
Or we can add an else block
if (isMidnight && isFullmoon && isTransformable(thisSpecies)) {
    newSpecies = transform(thisSpecies);
  } else {
    newSpecies = '';
  }
*/

const species = ['wolf', 'human', 'wasp', 'squirrel', 'weasel', 'dinosaur'];
const isMidnight = true;
const isFullmoon = true;

function isTransformable(species) {
  return species[0] === 'w';
}

function transform(species) {
  return `were${species}`;
}

for (let index = 0; index < species.length; index++) {
  const thisSpecies = species[index];
  var newSpecies = '';

  if (isMidnight && isFullmoon && isTransformable(thisSpecies)) {
    newSpecies = transform(thisSpecies);
  }

  if (newSpecies) {
    console.log(`Beware of the ${newSpecies}!`);
  }
}

/*
LS Solution:
// ommitted code

for (let index = 0; index < species.length; index++) {
  const thisSpecies = species[index];
  let newSpecies;

  if (isMidnight && isFullmoon && isTransformable(thisSpecies)) {
    newSpecies = transform(thisSpecies);
  }

  if (newSpecies) {
    console.log(`Beware of the ${newSpecies}!`);
  }
}


In our original code, we wrongly assume that newSpecies would be re-declared
and initialized with undefined during each iteration of our for loop.
We declare newSpecies inside of a block using var. However, var variables
have function scope, so the declaration of newSpecies is hoisted to the
top of the function, which, in this case, is the global scope.

What happened in our original for loop therefore was the following:

On the first iteration, newSpecies is initially undefined, as it has not
been assigned a value yet. All of the conditions provided to the if statement
on line 18 are truthy, and therefore newSpecies is assigned to the string
'werewolf'. Because 'werewolf' is truthy, the console.log on line 23 is executed.
On the next iteration of our loop, newSpecies will continue to reference
'werewolf' unless re-assigned since the variable declaration has been
hoisted to the top of the global scope. Since the condition provided to the
if statement on line 17 evaluates as false on this iteration, newSpecies
is not re-assigned to 'werehuman'. However, newSpecies still references
a truthy value, 'werewolf', and thus the code within our if statement on
line 21 is executed. Thus, we again log 'Beware of the werewolf!'.
The process continues analogously for the other values in species.
To fix this, we must ensure that newSpecies is reset to undefined in e
ach iteration. One way to do that is to change the declaration to use let
instead of var. Alternatively, we could insert newSpecies = undefined; after
the var declaration.

*/