var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

 
function addToCart(itemName) {
  var itemPrice=Math.floor((Math.random()*100));
  cart.push({[itemName]:itemPrice});
  console.log([itemName] +" item has been added to your cart");
  return cart;

}

function viewCart() {

  
  //In your cart, you have bananas at $17, pancake batter at $5, and eggs at $49.
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  delete cart.item;
}

function placeOrder(cardNumber) {
 delete card[cardNumber];
}
