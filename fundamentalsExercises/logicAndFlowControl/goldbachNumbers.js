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
	
	let primes1 = rangePrimes(2, expectedSum);
	let primes2 = rangePrimes(2, expectedSum);
	
	let pairs = [];
	for (var i = 0; i < primes1.length; i++) {
	  for (var j = 0; j < primes2.length; j++) {
	    pairs.push([primes1[i], primes2[j]]);
	  }
	}
	
	let matches = [];
	pairs.map(function(pair) {
		let sum = pair.reduce((sum, num) => sum += num, 0);
		if (sum === expectedSum && pair[0] <= pair[1]) {
			matches.push(pair);
		}
	});
	
	matches.forEach(function(match) {
		console.log(match[0], match[1]);
	});
	
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