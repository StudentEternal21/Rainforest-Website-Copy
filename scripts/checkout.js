import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart, loadCartFetch } from "../data/cart.js";
//import "../data/backend-practice.js";
/*The async keyword basically wraps the function inside the argument of a promise function
which returns a promise so you can use then after calling the async function. Or most importantly
use the await feature which is basically the promise.all method which waits for all the await function
starting from the first await to the last. since it has an await method then you can just put the code
that is supposed to be for the then below all the await functions removing the need for the then. */
async function loadPage() {
  try {

    await Promise.all([
      loadProductsFetch(),
      loadCartFetch()
    ]);

  } catch (error) {
    console.log('Unexpected error. Please try again later.');
  }


  

  renderOrderSummary();
  renderPaymentSummary();

}

loadPage()
/*The Promise class has another method called all which has an array as an argument
with the values being promises. It works the same way with then that after all the promises resolve
then it starts the then code block inside. */
/*
Promise.all([
  loadProductsFetch(),
   
  new Promise((resolve) => {
    loadCart(() => {
    resolve();
    });
  })

]).then((values) => {
  renderOrderSummary();
  renderPaymentSummary();
});

*/

/*Regular promises with the 'then' method. since  Promise is a built-in class we use new to 
instantiate a new object for a promise. at the end of a promise we append a method for then. the then 
method waits for the promise to resolve then start the code inside the then in a different thread.*/
/*
new Promise((resolve) => {

  loadProducts(() => {
    resolve('value1');  
  });


}).then((value) => {
  console.log(value);
  return new Promise((resolve) => {
    loadCart(() => {
    resolve();
    });
  });


}).then(() => {
    renderOrderSummary();
    renderPaymentSummary(); 
});
*/
// This is for the Callback function when creating asynchronous code. (Callback hell when more than two)

/*
loadProducts(() => {
  loadCart(() => {
    renderOrderSummary();
    renderPaymentSummary();
  });

});
*/