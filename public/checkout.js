import { renderOrderSummary } from "../scripts/checkout/orderSummary.js";
import { renderPaymentSummary } from "../scripts/checkout/paymentSummary.js";
import { renderCheckoutHeader } from "../scripts/checkout/checkoutHeder.js";
import { loadProductsFetchAwait } from "../data/products.js"

async function loadPage(){
  try {

    await loadProductsFetchAwait();
    
  } catch (error) {
    console.log('ERROR, try later');
    console.log(error);
  }
  
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
};
loadPage();