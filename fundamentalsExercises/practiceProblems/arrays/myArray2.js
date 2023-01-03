let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

let evens = [];
myArray.forEach(function (arr) {
   let nums = (arr.filter(num => num % 2 === 0));
   nums.forEach(num => evens.push(num));
});

evens.forEach(even => console.log(even));