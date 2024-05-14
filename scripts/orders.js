import {orders} from '../data/orders.js';
import {formatCurrency} from './utils/money.js';
import {renderDateOrder} from './utils/date.js';
import {loadProducts,products} from '../data/products.js';

loadProducts(renderOrderSummary);

function renderOrderSummary(){
  let generatedHTML = '';
  let generatedDetailsHTML = '';

  orders.forEach(order => {

    order.products.forEach(productOrder =>{
      let matchingProduct;

      products.forEach(product => {
        if(product.id === productOrder.productId){
          matchingProduct = product;
        }
      });
     
      generatedDetailsHTML += `
          <div class="order-details-grid">
            <div class="product-image-container">
              <img src=${matchingProduct.image}>
            </div>

            <div class="product-details">
              <div class="product-name">
                ${matchingProduct.name}
              </div>
              <div class="product-delivery-date">
                Arriving on: ${renderDateOrder(productOrder.estimatedDeliveryTime)}
              </div>
              <div class="product-quantity">
                Quantity: ${productOrder.quantity}
              </div>
              <button class="buy-again-button button-primary">
                <img class="buy-again-icon" src="images/icons/buy-again.png">
                <span class="buy-again-message">Buy it again</span>
              </button>
            </div>

            <div class="product-actions">
              <a href="tracking.html?orderid=123&productId=456">
                <button class="track-package-button button-secondary">
                  Track package
                </button>
              </a>
            </div>
          </div>
      `;
    });
    function returnGeneratedDetails(generatedDetailsHTML){
      return generatedDetailsHTML;
    }
    generatedHTML += `
        <div class="order-container">
          <div class="order-header">
            <div class="order-header-left-section">
              <div class="order-date">
                <div class="order-header-label">Order Placed:</div>
                <div>${renderDateOrder(order.orderTime)}</div>
              </div>
              <div class="order-total">
                <div class="order-header-label">Total:</div>
                <div>$${formatCurrency(order.totalCostCents)}</div>
              </div>
            </div>

            <div class="order-header-right-section">
              <div class="order-header-label">Order ID:</div>
              <div>${order.id}</div>
            </div>
          </div>
          ${returnGeneratedDetails(generatedDetailsHTML)}
        </div>
    `;
    generatedDetailsHTML = '';
  });
  document.querySelector('.js-orders-grid').innerHTML = generatedHTML;
};

// console.log(orders); // number of orders
// console.log(orders[1].products); //index 1 all products array
// console.log(orders[0].products[0].productId);


