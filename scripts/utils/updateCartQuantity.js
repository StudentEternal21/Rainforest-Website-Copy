import { calculateCartQuantity } from "../../data/cart.js";


export function updateCartQuantity(cartElement) {
  const cartQuantity = calculateCartQuantity()

  if(cartElement === '.js-cart-home-link'){
    if(cartQuantity <= 0){
    document.querySelector(cartElement).innerHTML = '';
  }
  else 
  document.querySelector(cartElement).innerHTML = cartQuantity + ' items';

  }
  else{
      
    if(cartQuantity <= 0){
      document.querySelector(cartElement).innerHTML = '';
    }
    else 
      document.querySelector(cartElement).innerHTML = cartQuantity;

    }

}