/*
Let's make the month readable. Using the same technique we used in problem 3,
convert the month number in the output string to a 3-letter month name abbreviation.
You may use the following array:
*/
let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let today = new Date();

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



console.log(`Today's date is ${daysOfWeek[today.getDay()]}, ${months[today.getMonth()]} ${dateSuffix(today.getDate())}`);