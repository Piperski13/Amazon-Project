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

      if(matchingItem){             //if matchingItem exsits its making this statemant true thus
        matchingItem.quantity++;    // it only increases its quantity and skips cart.push
      }else{
        cart.push({
          productId,
          quantity: 1
        });
      }
  saveToStorage();
}
export function removeFromCart(productId){
  let newCart = cart.filter((cartItem) => cartItem.productId !== productId) //returns 
  cart = newCart;
  saveToStorage();
}