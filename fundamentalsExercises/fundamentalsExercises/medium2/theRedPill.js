/*
Read through the code below and determine what will be logged.
You may refer to the ASCII Table to look up character code values.
*/

function one() {
  function log(result) {
    console.log(result);
  }

  function anotherOne(...args) {
    let result = '';
    for (let i = 0; i < args.length; i += 1) {
      result += String.fromCharCode(args[i]);
    }

    log(result);
  }

  function anotherAnotherOne() {
    console.log(String.fromCharCode(87, 101, 108, 99, 111, 109, 101)); // logs 'Welcome'
    anotherOne(116, 111); // logs 'to'
  }

  anotherAnotherOne();
  anotherOne(116, 104, 101); // logs 'the'
  return anotherOne;
}

one()(77, 97, 116, 114, 105, 120, 33); // logs 'Matrix!'
/*
This logs
'Welcome'
'to'
'the'
'Matrix!'

We first invoke one() which invokes the
anotherAnotherOne() function which logs 'Welcome'
then invokes anotherOne(116, 111) which iterates through the char codes passed in
and invokes the log(result) which logs 'to'.
After anotherAnotherOne() returns,
we invoke anotherOne(116, 104, 101) on line 26
which invokes log(result) and logs 'the'.
Finally, one() returns the anotherOne() function which allows us to invoke anotherOne
with 7 charcodes passed in anotherOne(77, 97, 116, 114, 105, 120, 33).
anotherOne iterates through the charcodes and invokes log(result)
which is 'Matrix!'

LS Solution:
The trick to solving this problem is to follow the sequence of function calls.
The call to the one function may look confusing, but it is actually just two
successive function calls (because the one function returns the anotherOne function).
Notice that when the anotherOne function is returned, it still has access to the
log function that is declared in its enclosing scope (closure) inside the one function.

This code has a total of eight function calls:
1: one();
2: anotherAnotherOne();                         // Welcome
3: anotherOne(116, 111);
4: log(result);                                 // to
5: anotherOne(116, 104, 101);
6: log(result);                                 // the
7: anotherOne(77, 97, 116, 114, 105, 120, 33);
8: log(result);                                 // Matrix!
*/