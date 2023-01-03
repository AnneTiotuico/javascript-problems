/*
Create a new variable named nextWeek that is a new Date copied from the today
object. Compare nextWeek and today, and log the results. Are they equal? Why or why not?
*/
let today = new Date();
let nextWeek = new Date(today.getTime());

console.log(today === nextWeek); // false because they are different Date objects