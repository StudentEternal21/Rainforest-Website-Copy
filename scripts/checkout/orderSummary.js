import { cart, changeCartQuantity, removeFromCart, updateDeliveryOption } from '../../data/cart.js'
import { products, getProduct } from '../../data/products.js';
import { updateCartQuantity } from '../utils/updateCartQuantity.js';
import { formatCurrency } from '../utils/money.js';
import { deliveryOptions, getDeliveryOption } from '../../data/deliveryOptions.js';
import { formatTime } from '../utils/formatTime.js';
import { renderPaymentSummary } from './paymentSummary.js';


export function renderOrderSummary () {

  let cartQuantityElement = '.js-cart-home-link';
  updateCartQuantity(cartQuantityElement);

  let cartSummaryHTML = '';

  cart.forEach((cartItem) => {
  const productId = cartItem.productId

  const matchingProduct = getProduct(productId);

  const deliveryOptionId = cartItem.deliveryOptionId;

  const deliveryOption = getDeliveryOption(deliveryOptionId)

  const dateString = formatTime(deliveryOption);

  cartSummaryHTML+= `
      <div class="cart-item-container 
      js-cart-item-container-${matchingProduct.id}">
      <div class="delivery-date">
        Delivery date: ${dateString}
      </div>

      <div class="cart-item-details-grid">
        <img class="product-image"
          src="${matchingProduct.image}">

        <div class="cart-item-details">
          <div class="product-name">
            ${matchingProduct.name}
          </div>
          <div class="product-price">
            $${formatCurrency(matchingProduct.priceCents)}
          </div>
          <div class="product-quantity">
            <span>
              Quantity: <span class="quantity-label js-quantity-label-${matchingProduct.id}">
              ${cartItem.quantity}</span>
            </span>
            <span class="update-quantity-link link-primary js-update-link" data-product-id="${matchingProduct.id}">
              Update
            </span>
            <input class="quantity-input js-quantity-${matchingProduct.id}">
            <span class="save-quantity-link link-primary js-save-link-${matchingProduct.id}">
              Save
            </span>
            <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingProduct.id}">
              Delete
            </span>
          </div>
        </div>

        <div class="delivery-options">
          <div class="delivery-options-title">
            Choose a delivery option:
          </div>
          ${deliveryOptionsHTML(matchingProduct, cartItem)}
        </div>
      </div>
    </div>
  `;
  });


  function deliveryOptionsHTML (matchingProduct, cartItem) {
    let html = ''

    deliveryOptions.forEach((deliveryOption) => {
      const dateString = formatTime(deliveryOption)

      const priceString = deliveryOption.priceCents 
      === 0
      ? 'FREE'
      : `$${formatCurrency(deliveryOption.priceCents)} -`;

      const isChecked = deliveryOption.id ===
      cartItem.deliveryOptionId

      html+=`<div class="delivery-option js-delivery-option"
            data-product-id="${matchingProduct.id}"
            data-delivery-option-id=${deliveryOption.id}>
          <input type="radio"
            ${isChecked ? 'checked': ''}
            class="delivery-option-input"
            name="delivery-option-${matchingProduct.id}">
          <div>
            <div class="delivery-option-date">
              ${dateString}
            </div>
            <div class="delivery-option-price">
              ${priceString} Shipping
            </div>
          </div>
        </div>
      `
    });

    return html;

  }

  document.querySelector('.js-order-summary').innerHTML= cartSummaryHTML;


  document.querySelectorAll('.js-delete-link').forEach((deleteLink) => {

    deleteLink.addEventListener('click',() => {
      const {productId} = deleteLink.dataset
      removeFromCart(productId);
      document.querySelector(`.js-cart-item-container-${productId}`).remove();
      updateCartQuantity(cartQuantityElement);
      renderPaymentSummary()
    });

  })

  //This is when a user changes the quantity of the item. update 
  document.querySelectorAll('.js-update-link').forEach((updateLink) => {

    updateLink.addEventListener('click', () => {
      
      const {productId} = updateLink.dataset;
      const quantityElement = document.querySelector(`.js-quantity-${productId}`)
      updateLink.classList.add('remove');
      quantityElement.classList.add('is-editing');
      document.querySelector(`.js-save-link-${productId}`)
      .classList.add('is-editing');

      document.querySelector(`.js-save-link-${productId}`)
      .addEventListener('click',() => {
        let quantity = quantityElement.value.trim();
        //This is where you will change the html later.
        if(quantity === ''){
          return;
        }

        quantity = Number(quantity);
        
        changeCartQuantity(productId, quantity)
        updateLink.classList.remove('remove');
        quantityElement.classList.remove('is-editing');
        document.querySelector(`.js-save-link-${productId}`)
        .classList.remove('is-editing');

        if(quantity >= 0 && quantity < 1000){
          document.querySelector(`.js-quantity-label-${productId}`)
          .innerHTML = quantity;
          updateCartQuantity(cartQuantityElement);
        }
        quantityElement.value = '';
        renderPaymentSummary();
      }); 
    });
  });


  
  document.querySelectorAll('.js-delivery-option')
    .forEach((element) => {

      element.addEventListener('click', () => {
        const {productId, deliveryOptionId} = element.dataset;
        updateDeliveryOption(productId, deliveryOptionId)
        renderOrderSummary(); 
        renderPaymentSummary();
      })
    })

}

