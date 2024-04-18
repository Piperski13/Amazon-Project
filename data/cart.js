export const cart = [];


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
}
