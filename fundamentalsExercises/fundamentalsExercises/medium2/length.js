/*
Read through the code below. What values will be logged to the console?
Can you explain these results?
*/

const languages = ['JavaScript', 'Ruby', 'Python'];
console.log(languages); // ['JavaScript', 'Ruby', 'Python']
console.log(languages.length); // 3

languages.length = 4;
console.log(languages); // ['JavaScript', 'Ruby', 'Python', <1 empty slot>]
console.log(languages.length); // 4

languages.length = 1;
console.log(languages); // ['JavaScript']
console.log(languages.length); // 1

languages.length = 3;
console.log(languages); // ['JavaScript', <2 empty slots>]
console.log(languages.length); // 3

languages.length = 1;
languages[2] = 'Python';
console.log(languages); // ['JavaScript', <1 empty slot>, 'Python']
console.log(languages[1]); // undefined
console.log(languages.length); // 3

/*
We first log the array ['JavaScript', 'Ruby', 'Python']; since we pass in the
languages variable that points to it to console.log. The array has 3 items and
therefore logging languages.length logs 3.
We reassign the array's length property to 4 so it adds an empty slot.
The empty slot is counted in the arrays length and logging the length will output
4.

We reassign the array's length property to 1 which removes all other elements after
the first element. Leaving us with ['JavaScript'] and a length of 1.

We reassign the array's length property to 3 which adds 2 empty slots after
'JavaScript' and logs 3 when loggins the array's length.

Finally we reassign the length to 1 which removes the 2 empty slots. Then we add
the string 'Python' at index 2. This leaves an empty slot between 'JavaScript' at
index 0 and 'Python' at index 2.
When we try to access the empty slot by index 1, we get undefined since it is empty.
Logging the array's length is 3 because the empty slot is counted along with
'JavaScript' and 'Python'

LS Solution:
The key takeaway for this exercise is that the length property can be
explicitly set (recall that arrays are zero-indexed). Setting the length
to a value that is less than the current length truncates the array;
re-setting the length to a higher value does not bring back the truncated
elements. Setting the length to a value greater than the current length
creates 'empty slots' in the array, but the number of actual elements
does not increase. Furthermore, since the value of the length is always
equal to the last index plus 1, adding an element to index 2 of a
one-element array changes the array's length to 3, even though the array
only has two actual elements (at indices 0 and 2).

Arrays with 'empty slots' are sometimes referred to as 'sparse arrays'.
You may see them represented in a variety of different ways. For example:

const sparseArray = [, , 'a', , 'b'];
console.log(sparseArray);

// logs
[<2 empty items>, 'a', <1 empty item>, 'b']    // Node REPL v8.8.1
[ , , 'a', , 'b']                              // older version of Node
[empty × 2, "a", empty, "b"]                   // Chrome Console v62
[undefined × 2, "a", undefined × 1, "b"]       // older version of Chrome
[<2 empty slots>, "a", <1 empty slot>, "b"]    // Firefox 57.0

*/