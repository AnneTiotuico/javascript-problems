/*
Log the values returned from the getFullYear and getYear methods.
Note how these values differ. Note especially that getYear is deprecated:
you should avoid using deprecated methods as they may one day disappear.
*/
let today = new Date();

console.log(today.getFullYear()); // 2021
console.log(today.getYear()); // 121

/*
From the docs:
For years greater than or equal to 2000, the value returned by getYear()
is 100 or greater. For example, if the year is 2026, getYear() returns 126.
*/