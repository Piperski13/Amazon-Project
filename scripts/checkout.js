import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { renderCheckoutHeader } from "./checkout/checkoutHeder.js";
import '../data/car.js';

// import "../data/cart-oop.js"
// import "../data/cart-class.js"

renderCheckoutHeader();
renderOrderSummary();
renderPaymentSummary();