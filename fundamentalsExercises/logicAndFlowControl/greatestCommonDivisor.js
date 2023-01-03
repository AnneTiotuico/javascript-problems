function gcd(num1, num2) {
	let currentNum = num1 > num2 ? num1 : num2;
	let gcd;
	
	for (; currentNum >= 1; currentNum--) {
		if (num1 % currentNum === 0 && num2 % currentNum === 0) {
			gcd = currentNum;
			break;
		}
	}
	
	console.log(gcd);
}

gcd(12, 4);   // 4
gcd(15, 10);  // 5
gcd(9, 2);    // 1