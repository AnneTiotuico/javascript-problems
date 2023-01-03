function evenOrOdd(num) {
    if (Number.isInteger(num)) {
        num % 2 === 0 ? console.log('even') : console.log('odd');
    } else {
        console.log('The argument is not a number');
        return;
    }
}

evenOrOdd(5);