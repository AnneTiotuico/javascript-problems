/*
Finally, write a function named formatTime that takes a date object as an
argument and returns a string formatted with the hours and minutes as "15:30".
Make sure you handle the case where the hours or minutes has only one digit:
you need to pad the value with a leading zero in such cases, e.g., "03:04".
You can use the getHours and getMinutes methods to obtain the hours and minutes.
*/


function formatTime(dateObj) {
  let hours = dateObj.getHours();
  let minutes = dateObj.getMinutes();
  if (String(hours).length === 1) {
    hours = '0' + hours;
  } else if (String(minutes).length === 1) {
    minutes = '0' + minutes;
  }

  return `${hours}:${minutes}`;
}

let today = new Date();
console.log(formatTime(today));