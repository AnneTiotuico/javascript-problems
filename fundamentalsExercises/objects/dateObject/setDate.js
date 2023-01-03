/*
Create a new date object variable named tomorrow that contains a Date object.
Initialize the variable by setting it to the value of today. You can get the
value of today using the getTime method. Next, change the date on the tomorrow
object to the day after today: you should use setDate to change the date.
Finally, log the tomorrow object with your formattedDate function.
*/
let today = new Date();

function formattedMonth(date) {
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return months[date.getMonth()];
}

function formattedDay(date) {
  let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return daysOfWeek[date.getDay()];
}

function formattedDate(date) {
  console.log(`Today's date is ${formattedDay(date)}, ${formattedMonth(date)} ${dateSuffix(date.getDate())}`);
}

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


let tomorrow = new Date(today.getTime());
tomorrow.setDate(today.getDate() + 1);
formattedDate(tomorrow);
