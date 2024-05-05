import { addToCart,cart,loadFromStorage } from "../../data/cart.js";

describe('test suite: addToCart',()=>{
  it('Added to cart case',()=>{
    spyOn(localStorage, 'getItem').and.callFake(()=>{  //creates copy of localstorage
      return JSON.stringify([]);
    });
    loadFromStorage();

    addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(cart.length).toEqual(1);
  });
});