function fizzbuzz() {
	for (let num = 1; num <= 100; num++) {
		if (num % 3 === 0 && num % 5 === 0) {
			console.log('FizzBuzz');
		} else if (num % 3 === 0) {
			console.log('Fizz');
		} else if (num % 5 === 0) {
			console.log('Buzz');
		} else {
			console.log(num);
		}
	}
}

fizzbuzz();

// console output
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// 17
// Fizz
// … rest of output omitted for brevity