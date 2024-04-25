import {cart,removeFromCart,calculateCartQuantity,updateQuantity} from "../data/cart.js";
import {products} from "../data/products.js"
import {formatCurrency} from "./utils/money.js";


let checkoutHTML = '';

const body = document.body;
body.addEventListener('click',(event)=>{
  console.log(event.target);
  if(!event.target.matches('span') && !event.target.matches('input')){
    generateCheckoutHTML();
  }
});

generateCheckoutHTML(); // generates the whole checkout page with all its funcionality

function generateCheckoutHTML(){
  checkoutHTML = '';
  cart.forEach(cartItem => {
    const productId = cartItem.productId;
    let matchingProduct;

    products.forEach(product => {
      if(product.id === productId){
        matchingProduct = product;
      }
    });
    checkoutHTML += 
      `<div class="js-cart-item-container-${matchingProduct.id}">
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

  updateCartQuantity(); // updates cart quantity in header part of the checkout.html
  productQuantityUpdate();  // adds event listeners to update/delete quantity
  saveLinkEvent();        // adds event listeners to save button that gets created on click update
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
    });
  });
}
  //adds event listeners to all Save links and on click removes class that was previously set for container, gets value from input and turns it into a num, and the pass is it in cart.js
  // and finnaly updates the page ( *generateCheckoutHTML() )
function saveLinkEvent(){
  document.querySelectorAll('.js-save-link').forEach((link)=>{
    link.addEventListener('click',()=>{
      const productId = link.dataset.productId;
      const itemContainer = document.querySelector(`.js-cart-item-container-${productId}`);
      itemContainer.classList.remove('is-editing-quantity');

      const quantityImput = document.querySelector(`.js-quantity-imput-${productId}`)
      let newQuantity = Number(quantityImput.value);
      console.log(typeof newQuantity);
      if(newQuantity === 0){
        deleteContainer(productId);
        updateQuantity(productId,newQuantity);
        generateCheckoutHTML();
      }
      if(newQuantity>=1000 || newQuantity<0){
        alert('Error value');
        generateCheckoutHTML();
      }
      else{
        updateQuantity(productId,newQuantity);
        generateCheckoutHTML();
      }
    });
  });
}

function deleteContainer(productId){
  removeFromCart(productId);
  const container = document.querySelector(`.js-cart-item-container-${productId}`);
  container.remove();
  updateCartQuantity();
}

