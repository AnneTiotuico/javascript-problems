function recursiveFactorial(n) {
    if (n < 2) return n;
    return recursiveFactorial(n - 1) * n;
}


// function recursiveFactorial(n) {
//     if (n === 1) {
//         return n;
//     } else {
//         return n * recursiveFactorial(n - 1);
//     }
// }

console.log(recursiveFactorial(1));     // => 1
console.log(recursiveFactorial(2));     // => 2
console.log(recursiveFactorial(3));     // => 6
console.log(recursiveFactorial(4));     // => 24
console.log(recursiveFactorial(5));     // => 120
console.log(recursiveFactorial(6));     // => 720
console.log(recursiveFactorial(7));     // => 5040
console.log(recursiveFactorial(8));     // => 40320