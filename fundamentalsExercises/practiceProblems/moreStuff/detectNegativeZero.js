function detectNegativeZero(value) {
     return 1 / value === - Infinity ? true : false;
}

console.log(detectNegativeZero(0)); // false
console.log(detectNegativeZero(-0)); // true