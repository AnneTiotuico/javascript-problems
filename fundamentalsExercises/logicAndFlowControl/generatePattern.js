function generatePattern(nStars) {
	let star = '*';
	let starCount = nStars - 1;
	let nums = [];
	for (let num = 1; num <= nStars; num++) {
		nums.push(num);
		console.log(`${nums.join('')}${star.repeat(starCount)}`);
		starCount -= 1;
	}
}

generatePattern(7);

// console output
// 1******
// 12*****
// 123****
// 1234***
// 12345**
// 123456*
// 1234567