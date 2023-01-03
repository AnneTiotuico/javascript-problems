/*
The productOfSums function shown below is expected to return the product of
the sums of two arrays of numbers. Read through the following code.
Will it produce the expected result? Why or why not?
*/

function productOfSums(array1, array2) {
  let result = total(array1) * total(array2);
  return result;
}

function total(numbers) {
  let sum;

  for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
  }

  sum;
}

/*
No because the variable sum isn't assigned to a number so it is defaulted to
undefined and anything added to undefined becomes NaN
Also the total function doesn't have an explicit return value so it will return
undefined so productOfSums will be undefined * undefined which evaluates to NaN
so NaN is returned.

LS Solution:

The code does not produce the expected result. The current implementation returns NaN.

Discussion
This code has two issues. The first is that the total function does not have an
explicit return statement, and thus returns undefined. Since total returns
undefined, the expression total(array1) * total(array2) becomes
undefined * undefined, which evaluates to NaN. The second issue is that in
the total function, the sum variable is not explicitly assigned a value,
which means that it has a value of undefined by default. Therefore, at the
end of each iteration of the loop, sum is assigned a value of NaN because
the expression undefined + numbers[i] evaluates to NaN.

A corrected version of the total function is shown below.

function total(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
  }

  return sum;
}

*/