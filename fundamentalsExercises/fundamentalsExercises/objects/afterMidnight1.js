/*
We can use the number of minutes before or after midnight to represent the time
of day. If the number of minutes is positive, the time is after midnight.
If the number of minutes is negative, the time is before midnight.

The timeOfDay function shown below takes a time argument using this minute-based
format, and returns the time of day in 24-hour format ("hh:mm").
Reimplement the function using JavaScript's Date object.

Note: Disregard Daylight Saving Time, Standard Time, and other complications.
*/

// const MINUTES_PER_HOUR = 60;
// const HOURS_PER_DAY = 24;
// const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

// function timeOfDay(deltaMinutes) {
//   deltaMinutes = deltaMinutes % MINUTES_PER_DAY;
//   if (deltaMinutes < 0) {
//     deltaMinutes = MINUTES_PER_DAY + deltaMinutes;
//   }

//   let hours = Math.floor(deltaMinutes / MINUTES_PER_HOUR);
//   let minutes = deltaMinutes % MINUTES_PER_HOUR;

//   return `${padWithZeroes(hours, 2)}:${padWithZeroes(minutes, 2)}`;
// }

function padWithZeroes(number, length) {
  let numberString = String(number);

  while (numberString.length < length) {
    numberString = `0${numberString}`;
  }

  return numberString;
}

const MILLISECONDS_PER_MINUTE = 60000;

function timeOfDay(deltaMinutes) {
  let date = new Date(0, 0, 0, 0, 0);
  let newTime = new Date((date.getTime() + deltaMinutes * MILLISECONDS_PER_MINUTE));
  let hours = newTime.getHours();
  let minutes = newTime.getMinutes();

  return `${padWithZeroes(hours, 2)}:${padWithZeroes(minutes, 2)}`;
}



console.log(timeOfDay(0));          // "00:00"
console.log(timeOfDay(-3));         // "23:57"
console.log(timeOfDay(35));         // "00:35"
console.log(timeOfDay(-1437));      // "00:03"
console.log(timeOfDay(3000));       // "02:00"
console.log(timeOfDay(800));        // "13:20"
console.log(timeOfDay(-4231));      // "01:29"


/*
LS Solution:
const MILLISECONDS_PER_MINUTE = 60000;

function timeOfDay(deltaMinutes) {
  const midnight = new Date('1/1/2000 00:00');
  const afterMidnight = new Date(midnight.getTime() + deltaMinutes * MILLISECONDS_PER_MINUTE);
  const hours = padWithZeroes(afterMidnight.getHours(), 2);
  const minutes = padWithZeroes(afterMidnight.getMinutes(), 2);

  return `${hours}:${minutes}`;
}

function padWithZeroes(number, length) {
  let numberString = String(number);

  while (numberString.length < length) {
    numberString = `0${numberString}`;
  }

  return numberString;
}

Going over the first timeOfDay function, notice that the function is aiming to
get two parts of the time of day: (1) the hours component and (2) the minutes
component. Without using the Date object's methods, the function has to handle
the sign of the input (negative or positive) and the wrapping-around of the
24-hour clock.

For this exercise, the solution leverages the Date.prototype.getTime method.
This method returns the value of the Date object in milliseconds format.
The solution starts off by creating a Date object set to midnight of an
arbitrary day and stores it in the midnight variable. The solution then
multiplies the deltaMinutes argument by MILLISECONDS_PER_MINUTE to convert
it to milliseconds, then adds it to the milliseconds value returned by
calling getTime() on midnight. The solution then creates another Date
object set to the sum of these two milliseconds values and assigns it to
the afterMidnight variable. Finally, the solution gets the hours and minutes
values from the afterMidnight variable, then uses the padWithZeroes function
to convert them to strings and pad them with the correct number of
leading zeroes.

*/