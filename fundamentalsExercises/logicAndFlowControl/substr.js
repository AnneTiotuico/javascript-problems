/*
problem:
given three args, str, start, length,
return a substring of str starting at start and ending at length chars
if start is negative, treat it as strLength + start,
for ex, if start is -3, treat it ias strLength - 3 as the starting index
length is the max length of returned substr, if length is greater than chars available,
just use all available chars

examples:
let string = 'hello world';
substr(string, 2, 4);      // "llo "
	-start at index 2 which is l and up to 4 chars which is llo and the space 
substr(string, -3, 2);     // "rl"
	-start is 11 - 3 which is index 8 which is r and up to 2 chars so rl
substr(string, 8, 20);     // "rld"
	-start at index 8 which is r and length 20 exceeds avail chars so return rest of string
	which is rld
substr(string, 0, -20);    // ""
	-start at index 0 which is h, but length is negative so empty string
substr(string, 0, 0);      // ""
	-start at index 0 which is h, but length is 0 so empty string
	
data structures:
string
number

algorithm:
guard clause, if length is less than or equal to 0, return empty string
create variable strLength that stores length of string
reassign start, if start is less than 0 assign to string's length - start, else start
create result str assigned to empty string
iterate through string starting at start index and up to length times
after each iteration, if index is valid, concatenate to result str
return result str
*/

function substr(string, start, length) {
	start = start < 0 ? string.length + start : start;
	
	let result = '';
	
	for (let i = 0; i < length; i++) {
		if (string[start]) {
			result += string[start];
			start += 1;
		}
	}
	
	return result;
}

let string = 'hello world';

console.log(substr(string, 2, 4));      // "llo "
console.log(substr(string, -3, 2));     // "rl"
console.log(substr(string, 8, 20));     // "rld"
console.log(substr(string, 0, -20));    // ""
console.log(substr(string, 0, 0));      // ""