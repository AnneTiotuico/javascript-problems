function average(arr) {
	return sum(arr) / arr.length;
}

function sum(arr) {
  let total = 0;
	for (let index = 0; index < arr.length; index++) {
		total += arr[index];
	}
	return total;
}

console.log(average([1,2,3,4,5]));

let temperatures = [63, 75, 54, 80, 92];
console.log(average(temperatures));