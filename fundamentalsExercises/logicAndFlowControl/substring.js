/*
problem:
-given three args, string, start, end,
-return substring of string start at index start and ending at index end (excluding index end)
-if start and end are > 0 and start < end and both are within boundary of string,
return substr from start index(inclusive) and end index (not inclusive)
-if start > end, swap values and return substr described above
-if start === end, return ''
-if end is omitted, end variable is undefine, return substr starting at start index
and up to end of str
-if either start or end is < 0 or NaN, treat as 0
if either start or end are > length of string, treat it as equal to string length

examples:
let string = 'hello world';

substring(string, 2, 4);    // "ll"
-start at index 2 which is l and end at index 4 which is o, but exclude it so we get 'll'

substring(string, 4, 2);    // "ll"
-start is > end, so swap and follow above, which gets 'll'

substring(string, 0, -1);   // ""
-start at index 0 and end is < 0 so treat as 0 and since start and end are equal,
return empty string

substring(string, 2);       // "llo world"
-start at index 2 which is 'l' and end is omitted, so return rest of the str

substring(string, 'a');     // "hello world"
-start is NaN so start is index 0 and end is omitted, so return rest of str

substring(string, 8, 20);   // "rld"
-start is index 8 so 'r', end is > length of string so treat as equal to string length
so end is index 11, but exclusive so 'rld' where d is index 10

data structures:
string
numbers

algorithm:
guard clause, if start and end are equal, return ''
if start > end, reassign start to end and end to start
if start or end is < 0 or NaN, reassign to 0
if start or end is > string.length reassign to string.length

create result string ''
iterate through string starting at index start and up to but not including index end
after each iteration, concatenate string[index]

*/


function substring(string, start, end) {
  if (start === end) return '';
  if (start > end) [start, end] = [end, start];
  
  if (start < 0 || isNaN(start)) start = 0; 
  if (start > string.length)start = string.length;
  
  if (end > string.length || end === undefined) end = string.length;
  if (end < 0 || isNaN(end))	end = 0;
  
  let result = '';
  for (; start < end; start++) {
  	result += string[start];
  }
  
  return result;
}

let string = 'hello world';

console.log(substring(string, 2, 4));    // "ll"
console.log(substring(string, 4, 2));    // "ll"
console.log(substring(string, 0, -1));   // ""
console.log(substring(string, 2));       // "llo world"
console.log(substring(string, 'a'));     // "hello world"
console.log(substring(string, 8, 20));   // "rld"