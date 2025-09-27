import { calculateCartQuantity } from "../../data/cart.js";

export function renderCheckoutHeader () {
  const cartQuantity = calculateCartQuantity();
  if(cartQuantity === 0){
    document.querySelector('.js-cart-quantity').innerHTML = '';
  }
  else {
    document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
  }

}