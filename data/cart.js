export let cart = JSON.parse(localStorage.getItem('cart')) || [];


function saveToStorage(){
  localStorage.setItem('cart',JSON.stringify(cart));    
}

export function addToCart(productId){
  let matchingItem;           //boolean value
      
      cart.forEach((cartItem)=>{              //when button clicked goe trough cart.js[], and if 
        if(productId === cartItem.productId ){    //it exists set item to matching item
          matchingItem = cartItem;
        }
      });
                    //gets value of drop down quantity and stores it
      let quantityString = document.querySelector(`.js-quantity-selector-${productId}`).value;
      let quantity = Number(quantityString);         //DOM retruns string always, so make it num

      if(matchingItem){                             //if matchingItem exsits its making this statemant true thus
        matchingItem.quantity+=quantity;               // it only increases its quantity and skips cart.push
      }else{
        cart.push({
          productId,
          quantity
        });
      }
  saveToStorage();
}
export function removeFromCart(productId){
  let newCart = cart.filter((cartItem) => cartItem.productId !== productId) //returns 
  cart = newCart;
  saveToStorage();
}

export function calculateCartQuantity(){    //calculates cart quantity and retuns its final value
  let cartQuantity = 0;

  cart.forEach(cartItem => {
    cartQuantity+=cartItem.quantity
  });
  return cartQuantity;
}