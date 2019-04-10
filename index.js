var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var cost = {price: Math.floor(Math.random()*100)};
  var newItem = new Object({itemName: item, itemPrice: Math.floor(Math.random()*100)});
  cart.push(newItem);
  console.log(`${newItem} has been added to your cart.`);
  return cart;
  }

function viewCart() {
  if(cart.length === 0) {
    console.log("Your shopping cart is empty.")
  }
  else{
    console.log(`In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}.`)
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
