import {products, Product, Clothing, Appliance} from "../../data/products.js";


describe('test suite: Normal Products', () => {
  

  it('turns priceCents into the real price', () => {

    expect(products[0].getPrice()).toEqual('$10.90');
  });

  it('gets the rating for the product', () => {

    expect(products[0].getStarsUrl()).toEqual('images/ratings/rating-45.png');
  });

  it('gets the extraInfo for the product', () => {

    expect(products[0].extraInfoHTML()).toEqual('');
  });
});

describe('test suite: Clothing Products', () => {
  

  it('turns priceCents into the real price', () => {

    expect(products[2].getPrice()).toEqual('$7.99');
  });

  it('gets the rating for the product', () => {

    expect(products[2].getStarsUrl()).toEqual('images/ratings/rating-45.png');
  })
});