export let cart = [
  {
    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity: 2
  },
  {
    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity: 1
  },
  {
    productId: "54e0eccd-8f36-462b-b68a-8182611d9add",
    quantity: 3
  }
];


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
export function removeFromCart(productId){
  let newCart = cart.filter((cartItem) => cartItem.productId !== productId)
  cart = newCart;
}