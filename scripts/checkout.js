import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { renderCheckoutHeader } from "./checkout/checkoutHeder.js";
//
import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js"; //dayjs library

renderCheckoutHeader();
renderOrderSummary();
renderPaymentSummary();



// const body = document.body;
// body.addEventListener('click',(event)=>{
//   if(!event.target.matches('span') && !event.target.matches('input')){
//     renderOrderSummary();
//   }
// });