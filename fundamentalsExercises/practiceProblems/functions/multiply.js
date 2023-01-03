let rlSync = require('readline-sync');

function getNumber(prompt) {
    let num = rlSync.question(prompt);
    return num;
}

let num1 = getNumber("Enter the first number: ");
let num2 = getNumber("Enter the second number: ");

function multiply(num1, num2) {
    return num1 * num2;
}

console.log(`${num1} * ${num2} = ${multiply(num1, num2)}`);
