import {formatCurrency} from '../../scripts/utils/money.js';

// the describe function creates the test suite
describe('test suite: formatCurrency', () => {
  //The it function creates the test/edge case name

  it('converts cents into dollars', () => {
    /*the expect function allows us to compare two values
    It has a toEqual object that allows the comparison itself to occur
    */
    expect(formatCurrency(2095)).toEqual('20.95');
  });

  it('works with zero', () => {
    expect(formatCurrency(0)).toEqual('0.00');
  });

  it('rounds up to the nearest cent', () => {
    expect(formatCurrency(2000.5)).toEqual('20.01');
  });

  it('rounds down to the nearest cent', () => {
    expect(formatCurrency(2000.4)).toEqual('20.00');
  })

  it('works with negative numbers', () => {
    expect(formatCurrency(-2000)).toEqual('-20.00');
  })

});