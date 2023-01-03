/*
Ideally, the suffix on the day number needs to adjust to the proper suffix for days like the 1st, 22nd, and 3rd. Write a function named dateSuffix that takes the day of month as a numeric value and returns the formatted day of month and suffix. Make sure you use the correct suffixes.
*/

function dateSuffix(dayOfMonth) {
  let suffix;
  if (dayOfMonth === 11 || dayOfMonth === 12 || dayOfMonth === 13) {
    suffix = 'th';
  }

  let stringNum = String(dayOfMonth);
  let lastNum = (stringNum[stringNum.length - 1]);
  switch (lastNum) {
    case '1':
      suffix = 'st';
      break;
    case '2':
      suffix = 'nd';
      break;
    case '3':
      suffix = 'rd';
      break;
    default:
      suffix = 'th';
  }
  return `${dayOfMonth}${suffix}`;
}

let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

let today = new Date();

console.log(`Today's date is ${daysOfWeek[today.getDay()]}, the ${dateSuffix(today.getDate())}`);