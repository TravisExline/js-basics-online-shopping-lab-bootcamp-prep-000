var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 let newItem = {
   "itemName": item,
   "itemPrice": Math.floor(Math.random()*100)
 }
 getCart().push(newItem);
 return `${newItem.itemName} has been added to your cart.`;
}

function viewCart() {
  
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
