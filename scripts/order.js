import { orders, addOrder, orderDeliveryDate } from "../data/orders.js";
import {formatCurrency} from './utils/money.js';
import { formatOrderTime } from "./utils/formatTime.js";
import { getProduct, loadProductsFetch, products } from "../data/products.js";
import { renderCheckoutHeader } from "./checkout/checkoutHeader.js";

loadProductsFetch().then((response) => {
  
  renderCheckoutHeader();
  renderOrderGridSummary();


});


function renderOrderGridSummary(){
  document.querySelector('.js-orders-grid').innerHTML = getOrdersHTML();
}


console.log(orders);

function getOrdersHTML(){
  let html = '';

  orders.forEach((order) => {
    console.log(order);
    html+=
    ` 
      <div class="order-container">
        <div class="order-header">
          <div class="order-header-left-section">
            <div class="order-date">
              <div class="order-header-label">Order Placed:</div>
              <div>${formatOrderTime(order.orderTime)}</div>
            </div>
            <div class="order-total">
              <div class="order-header-label">Total:</div>
              <div>$${formatCurrency(order.totalCostCents)}</div>
            </div>
          </div>

          <div class="order-header-right-section">
            <div class="order-header-label">Order ID:</div>
            <div>${order.id}</div>
          </div>
        </div>

        <div class="order-details-grid">
          ${getItemsHTML(order.products)}
        </div>
      </div>
    `
  });

  return html;
}



function getItemsHTML(orderProducts) {
  let html = '';

  orderProducts.forEach((item) => {

    let product = getProduct(item.productId);
    html+= 
    `
        
        <div class="product-image-container">
              <img src="${product.image}">
        </div>

          <div class="product-details">
            <div class="product-name">
              ${product.name}
            </div>
            <div class="product-delivery-date">
              Arriving on: ${orderDeliveryDate(item.estimatedDeliveryTime)}
            </div>
            <div class="product-quantity">
              Quantity: ${item.quantity}
            </div>
            <button class="buy-again-button button-primary">
              <img class="buy-again-icon" src="images/icons/buy-again.png">
              <span class="buy-again-message">Buy it again</span>
            </button>
          </div>

          <div class="product-actions">
            <a href="tracking.html">
              <button class="track-package-button button-secondary">
                Track package
              </button>
            </a>
          </div>

          
    `

  })
      return html;
}

