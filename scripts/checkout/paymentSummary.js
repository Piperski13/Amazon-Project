import { calculateCartQuantity, cart } from "../../data/cart.js";
import { products } from "../../data/products.js";
import { formatCurrency } from "../utils/money.js";

export function renderPaymentSummary(){
  let generatedHTML = '';
  let cartQuantity = calculateCartQuantity();
  let totalCents=0;
  cart.forEach(cartItem => {
    const productId = cartItem.productId;
    const productQuantity = cartItem.quantity;
    products.forEach(product => {
      if(product.id === productId){
        let priceCents = product.priceCents
        totalCents += productQuantity * priceCents;
        // console.log(productQuantity);
        // console.log(priceCents);
        // totalCents += priceCents;
      }
    });
  });
  console.log(totalCents);
  generatedHTML = `
  <div class="payment-summary-title">
    Order Summary
  </div>

  <div class="payment-summary-row">
    <div>Items (${cartQuantity}):</div>
    <div class="payment-summary-money">$${formatCurrency(totalCents)}</div>
  </div>

  <div class="payment-summary-row">
    <div>Shipping &amp; handling:</div>
    <div class="payment-summary-money">$4.99</div>
  </div>

  <div class="payment-summary-row subtotal-row">
    <div>Total before tax:</div>
    <div class="payment-summary-money">$47.74</div>
  </div>

  <div class="payment-summary-row">
    <div>Estimated tax (10%):</div>
    <div class="payment-summary-money">$4.77</div>
  </div>

  <div class="payment-summary-row total-row">
    <div>Order total:</div>
    <div class="payment-summary-money">$52.51</div>
  </div>

  <button class="place-order-button button-primary">
    Place your order
  </button>`;
  document.querySelector('.js-payment-summary').innerHTML= generatedHTML;
}