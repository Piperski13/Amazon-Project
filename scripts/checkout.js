import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { renderCheckoutHeader } from "./checkout/checkoutHeder.js";
import { loadProducts, loadProductsFetch } from "../data/products.js"
import { loadCart } from "../data/cart.js"

// import '../data/backend-practice.js';
// import '../data/car.js';
// import "../data/cart-oop.js"
// import "../data/cart-class.js"

async function loadPage(){
  try {
    // throw 'error1'
    await loadProductsFetch();

    const value = await new Promise((resolve,reject)=>{
      // throw 'error2'
      loadCart(()=>{
        // reject('error3'); since throw does not work in the future, we use reject;
        resolve('value1');
      });
    });

  } catch (error) {
    console.log('ERROR, try later');
    // console.log(error);  = if throw error = error1;
  }
  
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
};
loadPage();

/*
Promise.all([
  loadProductsFetch(),      //returns a promise therefore we dont need to create one
  new Promise((resolve)=>{
    loadCart(()=>{
      resolve();
    });
  })
]).then((values)=>{
  console.log(values);
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
})
*/

// Promise.all([
//   new Promise((resolve)=>{
//     loadProducts(()=>{
//       resolve('value test');
//     });
//   }),
//   new Promise((resolve)=>{
//     loadCart(()=>{
//       resolve();
//     });
//   })
// ]).then((values)=>{
//   console.log(values);
//   renderCheckoutHeader();
//   renderOrderSummary();
//   renderPaymentSummary();
// })

// new Promise((resolve)=>{
//   loadProducts(()=>{
//     resolve();
//   });
// }).then(()=>{
//   return new Promise((resolve)=>{
//     loadCart(()=>{
//       resolve();
//     });
//   });
// }).then(()=>{
//   renderCheckoutHeader();
//   renderOrderSummary();
//   renderPaymentSummary();
// });

// loadProducts(()=>{
//   loadCart(()=>{
//     renderCheckoutHeader();
//     renderOrderSummary();
//     renderPaymentSummary();
//   });
// });
