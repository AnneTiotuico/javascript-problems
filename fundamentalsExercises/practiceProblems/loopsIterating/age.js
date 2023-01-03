let rlSync = require('readline-sync');

let age = parseInt(rlSync.question("How old are you? "));

console.log(`You are ${age} years old.`);

for (let addAge = 10; addAge <= 40; addAge += 10) {
    console.log(`In ${addAge} years, you will be ${age + addAge} years old.`);
}
