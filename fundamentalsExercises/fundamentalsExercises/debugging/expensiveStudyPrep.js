/*
We make a few purchases to prepare for our study session, but the amount
charged upon checkout seems too high. Run the following code and find out
why we are charged incorrectly.
*/

// The shopping cart is a list of items, where each item
// is an object { name: <string>, amount: <number> }.
let shoppingCart = [];

// Currently available products with prices.
const prices = {
  'notebook': 9.99,
  'pencil': 1.70,
  'coffee': 3.00,
  'smoothie': 2.10,
};

function price({name}) {
  return prices[name];
}

// Adding an item to the shopping cart.
// The amount is optional and defaults to 1.
// If the item is already in the cart, its amount is updated.
function updateCart(name, amount) {
  amount = amount || 1;

  let alreadyInCart = false;

  for (let i = 0; i < shoppingCart.length; i += 1) {
    let item = shoppingCart[i];

    if (item.name === name) {
      item.amount = amount;
      alreadyInCart = true;
      break;
    }
  }

  if (!alreadyInCart) {
    shoppingCart.push({ name, amount });
  }
}

// Calculating the price for the whole shopping cart.
function total() {
  let total = 0;

  for (let i = 0; i < shoppingCart.length; i += 1) {
    let item = shoppingCart[i];

    total += (item.amount * price(item));
  }

  return total.toFixed(2);
}

function pay() {
  // omitted

  console.log(`You have been charged $${total()}.`);
}

function checkout() {
  pay();
  shoppingCart = [];
}

// Example purchase.

updateCart('notebook');
updateCart('pencil', 2);
updateCart('coffee', 1);
// "Oh, wait, I do have pencils..."
updateCart('pencil', 0);

checkout();
// You have been charged $14.69.


/* we get a wrong amount because within the updateCart() function, we use
amount = amount || 1; which relies on the truthyness of the amount passed in,
but when we try to update the cart with an amount of 0, 0 evaluates to false
and therefore sets amount to 1. Intead we can check if the amount is undefined
amount = (amount === undefined) ? 1 : amount;


LS Solution:
// prior code omitted

function updateCart(name, amount = 1) {
  let alreadyInCart = false;

  for (let i = 0; i < shoppingCart.length; i += 1) {
    let item = shoppingCart[i];

    if (item.name === name) {
      item.amount = amount;
      alreadyInCart = true;
      break;
    }
  }

  if (!alreadyInCart) {
    shoppingCart.push({ name, amount });
  }
}

// code omitted

checkout();
// You have been charged $12.99.

The problem was that one pencil remained in the shopping cart,
although we intended to update the quantity of pencils to 0 on line 70.
The reason is the following: When we call updateCart on line 70,
the amount passed in is 0. Since 0 is treated as falsy in JavaScript,
amount || 1 (line 21) returns 1. So every time we want to set the amount
of some item to 0, it is set to 1 instead.

Our solution instead uses a default parameter value to check whether
the amount parameter's value is undefined. If so, amount is given a default
value of 1.

*/