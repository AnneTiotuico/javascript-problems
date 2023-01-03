/*
Change your output to include the value from the getMonth method. Thus,
the logged string will read "Today's date is Mon, 11 6th", where 11 is the
month number returned by getMonth.
*/

function dateSuffix(dayOfMonth) {
  let suffix;
  if (dayOfMonth % 100 === 11 || dayOfMonth % 100 === 12 || dayOfMonth % 100 === 13) {
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

console.log(`Today's date is ${daysOfWeek[today.getDay()]}, ${today.getMonth()} ${dateSuffix(today.getDate())}`);