function stringToSignedInteger(string) {
	let ints;
	if (string[0] === '-' || string[0] === '+') {
		ints = stringToInt(string.slice(1));
		if (string[0] === '+') {
			ints;
		} else {
			ints = -ints;
		}
	} else {
		ints = stringToInt(string);
	}
	let result = ints;
	console.log(result);
}

function stringToInt(string) {
	const nums = {0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 
								5: 5, 6: 6, 7: 7, 8: 8, 9: 9};
	let numKeys = Object.keys(nums);

	let ints = string.split('').map(function (char) {
		let int;
		numKeys.forEach(key => {
			if (key === char) {
				return int = nums[key];
			}
		});
		return int;
	});
	
	let result = ints.reduce((acc, int) => 10 * acc + int, 0);

	return result;
}

stringToSignedInteger('4321');      // 4321
stringToSignedInteger('-570');      // -570
stringToSignedInteger('+100');      // 100