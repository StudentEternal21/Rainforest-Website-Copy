import {addToCart, cart, loadFromStorage, removeFromCart} from '../../data/cart.js';
// This is the jasmine framework to make sure everything is okay
describe('test suite: addToCart', () => {
  const mockCart =  [{
        productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 1,
        deliveryOptionId: '1'
      }];

  beforeEach(() => {
     spyOn(localStorage, 'setItem');
  });


  it('adds an existing product to the cart', () => {
      const expectedCart = [{
        productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 2,
        deliveryOptionId: '1'
      }];

    spyOn(localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify(mockCart);  
    });
    loadFromStorage();

    addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(cart.length).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(cart[0].quantity).toEqual(2);

    expect(localStorage.setItem).toHaveBeenCalledWith('cart',JSON.stringify(expectedCart));
    


  });

  it('adds a new product to the cart', () => {

    spyOn(localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify([]);
    });

    loadFromStorage();
  
    addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(cart.length).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(cart[0].quantity).toEqual(1);

    expect(localStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify(mockCart));

  });

});

describe('test suite: removeFromCart',() => {
  const mockCart = 
    [{
      productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity: 2, 
      deliveryOptionId: '1'
    },
    {
      productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
      quantity: 1,
      deliveryOptionId: '2'
    }];
  const removedItemCart = [{
      productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
      quantity: 1,
      deliveryOptionId: '2'
    }];

  const cartProductId = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6';
  const normalProductId = '83d4ca15-0f35-48f5-b7a3-1ea210004f2e'


  beforeEach(() => {
    spyOn(localStorage, 'setItem');

    spyOn(localStorage, 'getItem').and.callFake(() => JSON.stringify(mockCart))

    loadFromStorage();
  })

  it('remove a productId that is in the cart', () => {
    removeFromCart(cartProductId);
    expect(cart.length).toEqual(1); 
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(localStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify(removedItemCart));

  });

  it('remove a productId that is not in the cart', () => {
    removeFromCart(normalProductId);
    
    expect(cart.length).toEqual(2); 
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(localStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify(mockCart));
  });

});