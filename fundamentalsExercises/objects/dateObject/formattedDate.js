/*
Our call to console.log is getting cluttered. Let's clean things up a bit and
refactor the code into a few formatting functions that we can call from anywhere
in our code. Create formattedMonth and formattedDay functions to format the
month and day, then write a formattedDate function that pulls everything
together and logs the fully formatted date.
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


formattedDate(today);
