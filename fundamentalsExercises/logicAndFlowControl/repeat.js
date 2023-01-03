/*
problem:
- given a string and a number n, return the string n times
-if second arg is not a number or a negative number, return undefined
-if second arg is 0 return empty string
input: string and number
output: string or undefined

examples:
('abc', 1) -> "abc"
('abc', 2) -> "abcabc"
('abc', -1) -> undefined
('abc', 0) -> ""

data structures:
strings
numbers
undefined

algorithm:
create a function that takes in 2 arguments, a string and number n
output either a string or undefined
guard clause, if second arg is not a number or negative, return undefined
guard clause, if second arg is 0, return empty string
create variable assigned to empty string
loop n times and concatenate string on each iteration
*/

function repeat(string, times) {
  if (times < 0 || !Number.isInteger(times)) {
    return undefined;
  }
  
  let result = '';
  for (let i = 0; i < times; i++) {
   result += string; 
  }
  
  return result;
}

console.log(repeat('abc', 1));       // "abc"
console.log(repeat('abc', 2));       // "abcabc"
console.log(repeat('abc', -1));      // undefined
console.log(repeat('abc', 0));       // ""
console.log(repeat('abc', 'a'));     // undefined
console.log(repeat('abc', false));   // undefined
console.log(repeat('abc', null));    // undefined
console.log(repeat('abc', '  '));    // undefined