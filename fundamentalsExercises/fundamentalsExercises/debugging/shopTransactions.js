/*
Todd wrote some simple code in an attempt to log his shop's financial transactions.
Each time he makes a sale or spends money on inventory, he logs that deposit or
withdrawal via the logTransaction function. His code also intends to ensure
that each transaction logged is a valid numerical amount. At the end of each day,
he displays his total gain or loss for the day with transactionTotal.

Test out the code yourself. Can you spot the problem and fix it?
*/

// const transactionLog = [];

// function processInput(input) {
//   const numericalData = parseFloat(input);

//   if (Number.isNaN(numericalData)) {
//     throw (new Error('Data could not be converted to numerical amount.'));
//   }

//   return numericalData;
// }

// function logTransaction() {
//   let data = prompt('Please enter the transaction amount: ');

//   try {
//     data = processInput(data);
//     transactionLog.push(data);

//     alert('Thank you. Data accepted.');
//   } catch {
//     alert(error.message);
//   }
// }

// function transactionTotal() {
//   let total = 0;

//   for (let i = 0; i < transactionLog.length; i++) {
//     total += transactionLog[i];
//   }

//   return total;
// }

// logTransaction();
// logTransaction();
// logTransaction();

// console.log(transactionTotal());

const transactionLog = [];

function processInput(input) {
  const numericalData = parseFloat(input);

  if (Number.isNaN(numericalData)) {
    throw (new Error('Data could not be converted to numerical amount.'));
  }

  return numericalData;
}

function logTransaction() {
  let data = prompt('Please enter the transaction amount: ');

  try {
    data = processInput(data);
    transactionLog.push(data);

    alert('Thank you. Data accepted.');
  } catch (error){
    alert(error.message);
  }
}

function transactionTotal() {
  let total = 0;

  for (let i = 0; i < transactionLog.length; i++) {
    total += transactionLog[i];
  }

  return total;
}

logTransaction();
logTransaction();
logTransaction();

console.log(transactionTotal());

/*
we didnt capture the error in the catch block so error.message doesn't work
we must put catch (error) { ...
*/

/*
LS Solution:
function logTransaction() {
  let data = prompt('Please enter the transaction amount: ');

  try {
    data = processInput(data);
    transactionLog.push(data);

    alert('Thank you. Data accepted.');
  } catch(error) {
    alert(error.message);
  }
}


The catch block needs to receive an Error object in order to output
the Error object's message.

Further Exploration
In practice you should use try/catch blocks only when the following conditions are both true:

A built-in JavaScript Function or method can throw an Error and you need to handle or prevent that Error.
A simple guard clause is impossible or impractical.
In Todd's case, he could actually take advantage of the fact that NaN is falsy, to produce this much simpler code without try/catch:


const transactionLog = [];

function processInput(input) {
  return parseFloat(input);
}

function logTransaction() {
  let data = prompt('Please enter the transaction amount: ');

  data = processInput(data);

  if (data) {
    transactionLog.push(data);
    alert('Thank you. Data accepted.');
  } else {
    alert('Data could not be converted to numerical amount.')
  }
}

// code omitted
*/