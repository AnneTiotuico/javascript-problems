function isPrime(num) {
	if (num <= 1) return false;
	
	for (let int = 2; int < num; int++) {
		if (num % int === 0) {
			return false;
		}
	}
	
	return true;
}

function rangePrimes(start, end) {
	let range = [];
	while (start <= end) {
		if (isPrime(start)) {
			range.push(start);
		}
		start += 1;
	}
	return range;
}


function checkGoldbach(expectedSum) {
	if (expectedSum < 4 && expectedSum % 2 !== 0) {
		console.log(null);
		return;
	}
	
	let pairs = [];
	let primes = rangePrimes(2, expectedSum);
	
	primes.forEach(firstNum => {
		let secondNum = expectedSum - firstNum;
		if (isPrime(secondNum) && firstNum <= secondNum) {
			pairs.push([firstNum, secondNum]);
		}
	});
	
	pairs.forEach(pair => console.log(pair[0], pair[1]));
}

checkGoldbach(3);
// logs: null

checkGoldbach(4);
// logs: 2 2

checkGoldbach(12);
// // logs: 5 7

checkGoldbach(100);
// // logs:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53