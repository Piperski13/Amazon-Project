import {products,loadProductsFetch} from '../data/products.js';
import {orders} from '../data/orders.js';
import {renderDateOrderTracking} from './utils/date.js';

const url = new URL(window.location.href);
console.log(url.searchParams.get('orderId'));
console.log(url.searchParams.get('productId'));

loadProductsFetch().then(()=>{
  renderTrackingPage();
})


function renderTrackingPage(){
  let matchingProduct;
  let matchingOrder;

  const madeOrderId = url.searchParams.get('orderId');
  const productOrderId = url.searchParams.get('productId');

  orders.forEach(order => {
    if(order.id === madeOrderId){
      matchingOrder = order;
      
      matchingOrder.products.forEach(productOrder => {
        if(productOrder.productId === productOrderId){
          matchingOrder = productOrder;
        }
      });
    }
  });
    
      products.forEach(product => {
        if(product.id === productOrderId ){
          matchingProduct = product;
        }
      });
    
  let generatedHTML = `
     <div class="order-tracking">
        <a class="back-to-orders-link link-primary" href="orders.html">
          View all orders
        </a>

        <div class="delivery-date">
          Arriving on ${renderDateOrderTracking(matchingOrder.estimatedDeliveryTime)}
        </div>

        <div class="product-info">
          ${matchingProduct.name}
        </div>

        <div class="product-info">
          Quantity: ${matchingOrder.quantity}
        </div>

        <img class="product-image" src="${matchingProduct.image}">

        <div class="progress-labels-container">
          <div class="progress-label">
            Preparing
          </div>
          <div class="progress-label current-status">
            Shipped
          </div>
          <div class="progress-label">
            Delivered
          </div>
        </div>

        <div class="progress-bar-container">
          <div class="progress-bar"></div>
        </div>
      </div>
  `;
  document.querySelector('.main').innerHTML = generatedHTML;
}