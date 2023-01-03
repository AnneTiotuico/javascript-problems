function multiplesOfThreeAndFive() {
	for (let num = 1; num <= 100; num++) {
		if (num % 3 === 0 && num % 5 === 0) {
			console.log(`${num}!`);
		} else if (num % 3 === 0 || num % 5 === 0) {
			console.log(String(num));
		}
	}
}

multiplesOfThreeAndFive();

// output on console
// '3'
// '5'
// '6'
// '9'
// '10'
// '12'
// '15!'
// … remainder of output omitted for brevity
