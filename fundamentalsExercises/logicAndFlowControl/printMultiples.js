// function logMultiples(num) {
// 	let multiples = [];
	
// 	for (let odd = 1; odd <= 100; odd++) {
// 		if (odd % num === 0 && odd % 2 !== 0) {
// 			multiples.push(odd);
// 		}
// 	}
	
// 	multiples.reverse().forEach(num => console.log(num));
// }

function logMultiples(num) {
	for (let odd = 100; odd >= 0; odd--) {
		if (odd % num === 0 && odd % 2 !== 0) {
			console.log(odd);
		}
	}
}



logMultiples(17);
// output (5x, 3x and 1x)
// 85
// 51
// 17

logMultiples(21);
// output (3x and 1x)
// 63
// 21