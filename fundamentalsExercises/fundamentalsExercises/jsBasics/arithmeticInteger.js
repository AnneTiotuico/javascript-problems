let rlSync = require('readline-sync');

let firstNum = Number(rlSync.question('Enter the first number:\n'));

let secondNum = Number(rlSync.question('Enter the first number:\n'));

let sum = firstNum + secondNum;
let difference = firstNum - secondNum;
let product = firstNum * secondNum;
let quotient = firstNum / secondNum;
let remainder = firstNum % secondNum;
let power = firstNum ** secondNum;

console.log(`${firstNum} + ${secondNum} = ${sum}`);
console.log(`${firstNum} - ${secondNum} = ${difference}`);
console.log(`${firstNum} * ${secondNum} = ${product}`);
console.log(`${firstNum} / ${secondNum} = ${quotient}`);
console.log(`${firstNum} % ${secondNum} = ${remainder}`);
console.log(`${firstNum} ** ${secondNum} = ${power}`);