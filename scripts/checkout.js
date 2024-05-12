import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { renderCheckoutHeader } from "./checkout/checkoutHeder.js";
import {loadProducts} from "../data/products.js"

// import '../data/backend-practice.js';
// import '../data/car.js';
// import "../data/cart-oop.js"
// import "../data/cart-class.js"
loadProducts(()=>{
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
})
