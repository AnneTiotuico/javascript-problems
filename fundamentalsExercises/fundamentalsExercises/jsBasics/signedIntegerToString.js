function signedIntegerToString(int) {
	let result;
	if (int === 0) {
		result =  "0";
	} else if (int < 0) {
		result = "-" + integerToString(-(int));
	} else {
		result = "+" + integerToString(int);
	}
	console.log(result);
}

function integerToString(num) {
	let result;
	let digits = [];
	while (num > 0) {
		digits.push(num % 10);
		num = (num - (num % 10)) / 10;
	}
	
	result = digits.reverse().join('');
	
	return result;
}


signedIntegerToString(4321);      // "+4321"
signedIntegerToString(-123);      // "-123"
signedIntegerToString(0);         // "0"