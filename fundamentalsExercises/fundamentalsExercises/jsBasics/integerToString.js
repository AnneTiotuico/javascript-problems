function integerToString(num) {
	let result;
	if (num === 0) {
		result = "0";
	} else {
		let digits = [];
		while (num > 0) {
			digits.push(num % 10);
			num = (num - (num % 10)) / 10;
		}
		
		result = digits.reverse().join('');
		
		}
	
	console.log(result);
}


integerToString(4321);      // "4321"
integerToString(0);         // "0"
integerToString(5000);      // "5000"