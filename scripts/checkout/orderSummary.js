import {cart,
  removeFromCart,
  calculateCartQuantity,
  updateQuantity,
  updateDeliveryOptions}
   from "../../data/cart.js";
import {products} from "../../data/products.js"
import {formatCurrency} from "../utils/money.js";
import {deliveryOptions} from "../../data/deliveryOptions.js"
import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js"; //dayjs library
import { renderPaymentSummary } from "./paymentSummary.js";


export function renderOrderSummary(){
  function keyboardEvent(productId){
    document.querySelectorAll('.quantity-imput').forEach((input)=>{
      input.addEventListener('keydown',(event)=>{
        if(event.key==='Enter'){
          const itemContainer = document.querySelector(`.js-cart-item-container-${productId}`);
          itemContainer.classList.remove('is-editing-quantity');
          updateInput(productId);
        }
      });
    });
  };
  let checkoutHTML = '';
  cart.forEach(cartItem => {
    const productId = cartItem.productId;
    let matchingProduct;

    products.forEach(product => {
      if(product.id === productId){
        matchingProduct = product;
      }
    });

    const deliveryOptionId = cartItem.deliveryOptionId;
    let matchingDelivery;
    deliveryOptions.forEach(option => {
      if(option.id === deliveryOptionId){
        matchingDelivery = option;
      }
    });
    const today = dayjs();
    const deliveryDate  = today.add(matchingDelivery.deliveryDays,'days');
    const formatedDate = deliveryDate.format('dddd, MMMM D');
    checkoutHTML += 
      `<div class="js-cart-item-container-${matchingProduct.id}">
        <div class="delivery-date">
          Delivery date: ${formatedDate}
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
              Quantity: <span class="quantity-label">
              ${cartItem.quantity}
              </span>
            </span>
            <span class="update-quantity-link link-primary js-update-link" 
            data-product-id="${matchingProduct.id}">
              Update
            </span>
            <input type="text" class="quantity-imput js-quantity-imput-${matchingProduct.id}">
            <span class="save-quantity-link link-primary js-save-link"
            data-product-id="${matchingProduct.id}">Save</span>

            <span class="delete-quantity-link link-primary js-delete-link" 
            data-product-id="${matchingProduct.id}">
              Delete
            </span>
          </div>
        </div>

        <div class="delivery-options">
          <div class="delivery-options-title">
            Choose a delivery option:
          </div>
          ${deliveryOptionsHTML(matchingProduct,cartItem)}
        </div>
      </div>
    </div>`;
  });
  
  function deliveryOptionsHTML(matchingProduct,cartItem){
    let generatedHTML='';
    deliveryOptions.forEach((option) =>{
      const today = dayjs();
      const deliveryDate  = today.add(option.deliveryDays,'days');
      const formatedDate = deliveryDate.format('dddd, MMMM D');
      const priceStrings = option.priceCents === 0 ? 'FREE' : `$${formatCurrency(option.priceCents)} - Shipping`;
      const isChecked = option.id === cartItem.deliveryOptionId;
      generatedHTML +=
      `<div class="delivery-option js-delivery-option"
      data-product-id="${matchingProduct.id}"
      data-delivery-id="${option.id}">
        <input type="radio"
          ${isChecked ? 'checked' : ''}
          class="delivery-option-input"
          name="delivery-option-${matchingProduct.id}">
        <div>
          <div class="delivery-option-date">
            ${formatedDate}
          </div>
          <div class="delivery-option-price">
            ${priceStrings}
          </div>
        </div>
      </div>`;
    })
    return generatedHTML;
  }
  function updateCartQuantity(){ 
    let cartQuantity = calculateCartQuantity();     //cart.js function that calculates cart quantity
    if(cartQuantity === 0){
      document.querySelector('.js-return-to-home-link').innerHTML = ``;
    }
    else{
      document.querySelector('.js-return-to-home-link').innerHTML = `${cartQuantity} items`;
    }
  };
  function productQuantityUpdate(){
    //event Listener for a delete button
    document.querySelectorAll('.js-delete-link').forEach((link)=>{
      link.addEventListener('click',()=>{
        const productId = link.dataset.productId;
        deleteContainer(productId);
      });
    });
  
    //event Listener for a update button
    document.querySelectorAll('.js-update-link').forEach((link)=>{
      link.addEventListener('click',()=>{
        const productId = link.dataset.productId;
        const itemContainer = document.querySelector(`.js-cart-item-container-${productId}`);
        itemContainer.classList.add('is-editing-quantity');
        keyboardEvent(productId);
      });
    });
  }

    //adds event listeners to all Save links and on click removes class that was previously set for container, gets value from input and turns it into a num, and the pass is it in cart.js
    // and finnaly updates the page ( *renderOrderSummary() )
  function saveLinkEvent(){
    document.querySelectorAll('.js-save-link').forEach((link)=>{
      link.addEventListener('click',()=>{
        const productId = link.dataset.productId;
        const itemContainer = document.querySelector(`.js-cart-item-container-${productId}`);
        itemContainer.classList.remove('is-editing-quantity');
        updateInput(productId);
      });
    });
  }
  
  function deleteContainer(productId){
    removeFromCart(productId);
    const container = document.querySelector(`.js-cart-item-container-${productId}`);
    container.remove();
    updateCartQuantity();
    renderPaymentSummary();
  }
  function updateInput(productId){
    const quantityImput = document.querySelector(`.js-quantity-imput-${productId}`)
    let newQuantity = Number(quantityImput.value);
    if(newQuantity === 0){
      deleteContainer(productId);
      updateQuantity(productId,newQuantity);
      renderOrderSummary();
      renderPaymentSummary();
    }
    if(newQuantity>=1000 || newQuantity<0){
      alert('Error value');
      renderOrderSummary();
    }
    else{
      updateQuantity(productId,newQuantity);
      renderOrderSummary();
      renderPaymentSummary();
    }
  }
  function deliveryUpdate(){
    document.querySelectorAll('.js-delivery-option').forEach(option=>{
      option.addEventListener('click',()=>{
        const productId = option.dataset.productId;
        const deliveryOptionId = option.dataset.deliveryId;
        updateDeliveryOptions(productId,deliveryOptionId);
        renderOrderSummary();
        renderPaymentSummary(); // generates Payment box again
      })
    })
  }

  document.querySelector('.order-summary').innerHTML = checkoutHTML;

  updateCartQuantity(); // updates cart quantity in header part of the checkout.html
  productQuantityUpdate();  // adds event listeners to update/delete quantity
  saveLinkEvent();        // adds event listeners to save button that gets created on click update
  deliveryUpdate(); // adds interactive radio buttens / dates
}





