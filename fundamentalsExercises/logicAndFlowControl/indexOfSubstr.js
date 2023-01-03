/*
return -1 if firststring doesnt contain second string
return index of first char where matching substr begins

get length of secondstring seclength
iterate through first string starting with the first seclength chars
check if it matches secondstring

*/

function indexOf(firstString, secondString) {
  let secStrLength = secondString.length;
	for (let index = 0; index < firstString.length - 1; index++) {
		if (firstString[index] === secondString[0] && firstString[index + secStrLength - 1] === secondString[secStrLength - 1]) {
			console.log(index);
			return;
		}
	}
	console.log(-1);
}

function lastIndexOf(firstString, secondString) {
  let secStrLength = secondString.length;
  for (let index = firstString.length - 1; index > 0; index--) {
		if (firstString[index] === secondString[0] && firstString[index + secStrLength - 1] === secondString[secStrLength - 1]) {
			console.log(index);
			return;
		}
	}
	console.log(-1);
}

indexOf('Some strings', 's');                      // 5
indexOf('Blue Whale', 'Whale');                    // 5
indexOf('Blue Whale', 'Blute');                    // -1
indexOf('Blue Whale', 'leB');                      // -1

lastIndexOf('Some strings', 's');                  // 11
lastIndexOf('Blue Whale, Killer Whale', 'Whale');  // 19
lastIndexOf('Blue Whale, Killer Whale', 'all');    // -1