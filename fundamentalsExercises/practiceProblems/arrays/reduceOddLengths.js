function oddLengths(arr) {
  return arr.reduce(function(acc, num) {
     return (num.length % 2 === 0) ? acc : acc.concat(num.length);
    }, []);
}


function oddLengths(arr) {
   return arr.reduce((acc, num) => (num.length % 2 === 0) ? acc : acc.concat(num.length), []);
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]