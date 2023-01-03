/*
The following program is expected to log each number between 0 and 9
(inclusive) that is a multiple of 3. Read through the code shown below.
Will it produce the expected result? Why or why not?
*/

let i = 0;
while (i < 10) {
  if (i % 3 === 0) {
    console.log(i);
  } else {
    i += 1;
  }
}

/*
No, this will be an infinite loop because we start at i = 0 and the while loop
will run as long as i is less than 10, but because of the conditional, i is never
incremeneted since it will run the if branch and i will never be incremented.



LS Solution:
No, the result is not as expected. This code results in an infinite loop that logs 0 to the console on each iteration.

Discussion
This code results in an infinite loop because the variable i is never incremented. The conditional expression (i % 3 === 0) always evaluates as true, so the else clause containing the incrementer expression is never executed. When using a while loop, it is important to carefully manage the variable(s) involved with the iteration and the stopping condition. For this exercise, the code can be fixed by incrementing i on each iteration.

// solution 1
let i = 0;
while (i < 10) {
  if (i % 3 === 0) {
    console.log(i);
  }

  i += 1;
}


// solution 2
for (let i = 0; i < 10; i += 1) {
  if (i % 3 === 0) {
    console.log(i);
  }
}
*/