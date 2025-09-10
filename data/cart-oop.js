function Cart(localStorageKey) {
  const cart = {
  cartItems: undefined,

  loadFromStorage() {
     this.cartItems = JSON.parse(localStorage.getItem(localStorageKey)) ||[{
     productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
     quantity: 2, 
     deliveryOptionId: '1'
    },
    {
      productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
      quantity: 1,
      deliveryOptionId: '2'
    }];
    },

    saveToStorage () {
      localStorage.setItem(localStorageKey, JSON.stringify(this.cartItems))
    },

    addToCart(productId) {
    
      let matchingItem;
    
      let quantity = Number(document.querySelector(`.js-quantity-selector-${productId}`)?.value) || 1;
    
      this.cartItems.forEach((cartItem) => {
    
        if (productId === cartItem.productId) {
          matchingItem = cartItem;
        }
      });
    
      if (matchingItem) {
        matchingItem.quantity += quantity;
      }
      else {
        this.cartItems.push({
            productId, 
            quantity,
            deliveryOptionId: '1'
          });
      }
      
    
      this.saveToStorage()
    
    },

    removeFromCart(productId) {
      const newCart = [];
    
      this.cartItems.forEach((cartItem) => {
        if(cartItem.productId !== productId){
          newCart.push(cartItem)
        }
      })
      this.cartItems = newCart
    
      this.saveToStorage()
    },
    
    calculateCartQuantity () {
        let cartQuantity = 0;
    
      this.cartItems.forEach((cartItem) => {
        cartQuantity+= cartItem.quantity;
      });
      return cartQuantity
    },

    changeCartQuantity (productId, quantity) {
      if(!quantity){
        return console.log('This is not a number');
      }
      if(quantity >= 0 && quantity < 1000){
        this.cartItems.forEach((cartItem) => {
        if(cartItem.productId === productId){
          cartItem.quantity = Number(quantity);
          this.saveToStorage();
        }
        });
      }
      
    
    },

    updateDeliveryOption(productId, deliveryOptionId) {
      let matchingItem;
      if(deliveryOptionId !== '1' && deliveryOptionId !== '2' && deliveryOptionId !== '3'){
        return;
      }
    
      this.cartItems.forEach((cartItem) => {
        if(cartItem.productId === productId){
          matchingItem = cartItem;
          matchingItem.deliveryOptionId = deliveryOptionId
          this.saveToStorage();
        }
        else{
          return; 
        }
      });
    }
};
return cart;
}

const cart = Cart('cart-oop');
const businessCart = Cart('cart-business');


cart.loadFromStorage();
businessCart.loadFromStorage();

console.log(cart);
console.log(businessCart);



