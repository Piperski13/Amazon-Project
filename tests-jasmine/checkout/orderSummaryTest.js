import {cart, loadFromStorage} from "../../data/cart.js";
import {renderOrderSummary} from "../../scripts/checkout/orderSummary.js";
describe('test suite: renderOrderSummary',()=>{
  const productId1 = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6';
  const productId2 = '15b6fc6f-327a-4ec4-896f-486349e85a3d';
  beforeEach(()=>{
    spyOn(localStorage,'setItem');
    document.querySelector('.test-container').innerHTML=`
    <div class="order-summary"></div>
    <div class="js-return-to-home-link"></div>
    `
    spyOn(localStorage,'getItem').and.callFake(()=>{
      return JSON.stringify([{
        productId: productId1,
        quantity: 2,
        deliveryOptionId: '3'
      }, {
        productId: productId2,
        quantity: 1,
        deliveryOptionId: '2'
      }]);
    });
    loadFromStorage();
    renderOrderSummary();
  });
  afterEach(()=>{
    document.querySelector('.test-container').innerHTML=``;
  })
  it('check orderSummary rendering on screen',()=>{
   

  });
});

