import {products, loadProducts} from "../../data/products.js";


describe('test suite: Normal Products', () => {
  let normalProduct;
  beforeAll((done) => {
    loadProducts(() =>{
      done();
       normalProduct = products[0];
    });

  });
  
  it('turns priceCents into the real price', () => {
 
    expect(normalProduct.getPrice()).toEqual('$10.90');
  });

  it('gets the rating for the product', () => {

    expect(normalProduct.getStarsUrl()).toEqual('images/ratings/rating-45.png');
  });

  it('gets the extraInfo for the product', () => {

    expect(normalProduct.extraInfoHTML()).toEqual('');
  });
});

describe('test suite: Clothing Products', () => {

  let normalClothing;
  beforeAll((done) => {
    loadProducts(() =>{
      done();
      normalClothing = products[2];
    });

  });
  

  it('turns priceCents into the real price', () => {

    expect(normalClothing.getPrice()).toEqual('$7.99');
  });

  it('gets the rating for the product', () => {

    expect(normalClothing.getStarsUrl()).toEqual('images/ratings/rating-45.png');
  });

    it('gets the extraInfo for the product', () => {

    expect(normalClothing.extraInfoHTML()).toContain('clothing-size-chart.png');
  });
});

