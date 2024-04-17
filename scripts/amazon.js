
let productsHTML = '';
//gets products from products.js and generates html 
products.forEach((product)=>{
  productsHTML += `
    <div class="product-container">
    <div class="product-image-container">
      <img class="product-image"
        src="${product.image}">
    </div>

    <div class="product-name limit-text-to-2-lines">
      ${product.name}
    </div>

    <div class="product-rating-container">
      <img class="product-rating-stars"
        src="images/ratings/rating-${product.rating.stars*10}.png">
      <div class="product-rating-count link-primary">
        ${product.rating.count}
      </div>
    </div>

    <div class="product-price">
      $${(product.priceCents/100).toFixed(2)}
    </div>

    <div class="product-quantity-container">
      <select>
        <option selected value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </div>

    <div class="product-spacer"></div>

    <div class="added-to-cart">
      <img src="images/icons/checkmark.png">
      Added
    </div>

    <button class="add-to-cart-button button-primary js-add-button" data-product-id="${product.id}">
      Add to Cart
    </button>
  </div>`
});
document.querySelector('.js-product-container').innerHTML = productsHTML;

//adds event listeners to add buttons
document.querySelectorAll('.js-add-button')
  .forEach((button)=>{                                
    button.addEventListener('click',()=>{
      const productId = button.dataset.productId; //on click save data-product-id in a const
      let matchingItem;           //boolean value
      
      cart.forEach((item)=>{              //when button clicked goe trough cart.js[], and if 
        if(productId === item.productId ){    //it exists set item to matching item
          matchingItem = item;
        }
      });

      if(matchingItem){             //if matchingItem exsits its making this statemant true thus
        matchingItem.quantity++;    // it only increases its quantity and skips cart.push
      }else{
        cart.push({
          productId,
          quantity: 1
        });
      }
        console.log(cart);
    });
    
});