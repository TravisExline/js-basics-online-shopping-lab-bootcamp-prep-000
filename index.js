var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var cost = {price: Math.floor(Math.random()*100+1)}
  var item = new Object({itemName: "apples", itemPrice: cost},
  {itemName: "bananas", itemPrice: cost},
  {itemName: "carrots", itemPrice: cost},
  {itemName: "daikon", itemPrice: cost})
  console.log(`${item} has been added to your cart.`)
  return cart;
  }

function viewCart() {
  if (cart.length < 1) {
    console.log("Your shopping cart is empty.")
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
