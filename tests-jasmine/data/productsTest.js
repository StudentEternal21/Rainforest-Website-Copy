import {products} from "../../data/products.js";


describe('test suite: Normal Products', () => {
  const normalProduct = products[0];  

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
  const normalClothing = products[2];

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

describe('test suite: Appliance Products', () => {
  const normalAppliance = products[3];

  it('turns priceCents into the real price', () => {

    expect(normalAppliance.getPrice()).toEqual('$18.99');
  });

  it('gets the rating for the product', () => {

    expect(normalAppliance.getStarsUrl()).toEqual('images/ratings/rating-50.png');
  });

    it('gets the extraInfo for the product', () => {

    expect(normalAppliance.extraInfoHTML()).toContain('appliance-instructions.png');

    expect(normalAppliance.extraInfoHTML()).toContain('appliance-warranty.png');
  });
});