/*
As seen in the previous exercise, the time of day can be represented as the
number of minutes before or after midnight. If the number of minutes is
positive, the time is after midnight. If the number of minutes is negative,
the time is before midnight.

The two functions below do the reverse of the previous exercise.
They take a 24-hour time argument and return the number of minutes before
or after midnight, respectively. Both functions should return a value
between 0 and 1439 (inclusive). Refactor the functions using the Date object.
*/

// const MINUTES_PER_HOUR = 60;
// const HOURS_PER_DAY = 24;
// const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

// function afterMidnight(timeStr) {
//   const timeComponents = timeStr.split(':');
//   const hours = parseInt(timeComponents[0], 10);
//   const minutes = parseInt(timeComponents[1], 10);

//   return hours * MINUTES_PER_HOUR + minutes;
// }

// function beforeMidnight(timeStr) {
//   let deltaMinutes = MINUTES_PER_DAY - afterMidnight(timeStr);
//   if (deltaMinutes === MINUTES_PER_DAY) {
//     deltaMinutes = 0;
//   }

//   return deltaMinutes;
// }


const MILLISECONDS_PER_MINUTE = 60000;
const MINUTES_PER_DAY = 1440;

function afterMidnight(timeStr) {
  let hours = timeStr.slice(0, 2);
  let minutes = timeStr.slice(3);
  let midnight = new Date(0, 0, 0, 0, 0);
  let time = new Date(0, 0, 0, hours, minutes);
  let difference = time.getTime() - midnight.getTime();
  let totalMinutes = difference / MILLISECONDS_PER_MINUTE ;

  return totalMinutes;
}

function beforeMidnight(timeStr) {
  let result = MINUTES_PER_DAY - afterMidnight(timeStr);
  if (result === MINUTES_PER_DAY) return 0;

  return result;
}

console.log(afterMidnight('00:00'));       // 0
console.log(beforeMidnight('00:00'));      // 0
console.log(afterMidnight('12:34'));       // 754
console.log(beforeMidnight('12:34'));      // 686

/*
LS Solution:

const MILLISECONDS_PER_MINUTE = 60000;
const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;
const DATE_PART = '1/1/2000';

function afterMidnight(timeStr) {
  const midnight = new Date(`${DATE_PART} 00:00`);
  const currentDateTime = new Date(`${DATE_PART} ${timeStr}`);

  return (currentDateTime.getTime() - midnight.getTime()) / MILLISECONDS_PER_MINUTE;
}

function beforeMidnight(timeStr) {
  let deltaMinutes = MINUTES_PER_DAY - afterMidnight(timeStr);
  if (deltaMinutes === MINUTES_PER_DAY) {
    deltaMinutes = 0;
  }

  return deltaMinutes;
}

Since the beforeMidnight function relies on the afterMidnight function to
provide most of its behavior, the solution only makes changes to afterMidnight.
In afterMidnight, the solution starts off by creating two Date objects to
represent midnight and the currentDateTime derived from the timeStr argument.
Next, it calls Date.prototype.getTime to convert the two Date objects to
milliseconds, then subtracts the midnight milliseconds from the currentDateTime
milliseconds. Finally, the solution divides the result by
MILLISECONDS_PER_MINUTE to convert it to minutes, then returns it.

*/