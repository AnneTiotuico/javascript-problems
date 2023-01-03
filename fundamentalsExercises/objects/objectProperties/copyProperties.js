/*
Write a function named copyProperties that takes two Objects as arguments.
The function should copy all properties from the first object to the second.
The function should return the number of properties copied.
*/
// function copyProperties(obj1, obj2) {
//   for (let prop in obj1) {
//     obj2[prop] = obj1[prop];
//   }

//   return Object.keys(obj2).length;
// }

function copyProperties(obj1, obj2) {
  let count = 0;
  for (let prop in obj1) {
    obj2[prop] = obj1[prop];
    count += 1;
  }

  return count;
}

let hal = {
  model: 9000,
  enabled: true,
};

let sal = {};
console.log(copyProperties(hal, sal));  // 2
console.log(sal);                       // { model: 9000, enabled: true }