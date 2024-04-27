import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";

renderOrderSummary();
renderPaymentSummary();



// const body = document.body;
// body.addEventListener('click',(event)=>{
//   if(!event.target.matches('span') && !event.target.matches('input')){
//     renderOrderSummary();
//   }
// });
