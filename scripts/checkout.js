import {cart,removeFromCart,calculateCartQuantity} from "../data/cart.js";
import {products} from "../data/products.js"
import {formatCurrency} from "./utils/money.js";


let checkoutHTML = '';

cart.forEach(cartItem => {
  const productId = cartItem.productId;
  let matchingProduct;

  products.forEach(product => {
    if(product.id === productId){
      matchingProduct = product;
    }
  });
  
  checkoutHTML += 
    `<div class="cart-item-container-${matchingProduct.id}">
      <div class="delivery-date">
        Delivery date: Tuesday, June 21
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
            Quantity: <span class="quantity-label">${cartItem.quantity}</span>
          </span>
          <span class="update-quantity-link link-primary js-update-link" 
          data-product-id="${matchingProduct.id}">
            Update
          </span>
          <input type="text" class="quantity-imput">
          <span class="save-quantity-link link-primary">Save</span>

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
        <div class="delivery-option">
          <input type="radio" checked
            class="delivery-option-input"
            name="delivery-option-${matchingProduct.id}">
          <div>
            <div class="delivery-option-date">
              Tuesday, June 21
            </div>
            <div class="delivery-option-price">
              FREE Shipping
            </div>
          </div>
        </div>
        <div class="delivery-option">
          <input type="radio"
            class="delivery-option-input"
            name="delivery-option-${matchingProduct.id}">
          <div>
            <div class="delivery-option-date">
              Wednesday, June 15
            </div>
            <div class="delivery-option-price">
              $4.99 - Shipping
            </div>
          </div>
        </div>
        <div class="delivery-option">
          <input type="radio"
            class="delivery-option-input"
            name="delivery-option-${matchingProduct.id}">
          <div>
            <div class="delivery-option-date">
              Monday, June 13
            </div>
            <div class="delivery-option-price">
              $9.99 - Shipping
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
});

document.querySelector('.order-summary').innerHTML = checkoutHTML;
updateCartQuantity();

function updateCartQuantity(){ 
  let cartQuantity = calculateCartQuantity();     //cart.js function that calculates cart quantity
  if(cartQuantity === 0){
    document.querySelector('.js-return-to-home-link').innerHTML = ``;
  }
  else{
    document.querySelector('.js-return-to-home-link').innerHTML = `${cartQuantity} items`;
  }
};
  
  //event Listener for a delete button
  document.querySelectorAll('.js-delete-link').forEach((link)=>{
    link.addEventListener('click',()=>{
      const productId = link.dataset.productId;
      removeFromCart(productId);
      const container = document.querySelector(`.cart-item-container-${productId}`);
      container.remove();
      updateCartQuantity();
    });
  });

  //event Listener for a update button
  document.querySelectorAll('.js-update-link').forEach((link)=>{
    link.addEventListener('click',()=>{
      const productId = link.dataset.productId;
      const itemContainer = document.querySelector(`.cart-item-container-${productId}`);
      itemContainer.classList.add('is-editing-quantity');
      console.log(itemContainer);
    });
  });