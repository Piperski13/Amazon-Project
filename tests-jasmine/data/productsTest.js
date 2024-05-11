import {Product,Clothing,Appliance} from "../../data/products.js";
describe('test Product class',()=>{
  let product;
  beforeEach(()=>{
      product = new Product({
      id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      image: "images/products/athletic-cotton-socks-6-pairs.jpg",
      name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
      rating: {
        stars: 4.5,
        count: 87
      },
      priceCents: 1090,
      keywords: [
        "socks",
        "sports",
        "apparel"
      ]
    });
  })
  it('product class test:',()=>{
    expect(product.id).toEqual("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
    expect(product.priceCents).toEqual(1090);
    expect(product.name).toEqual("Black and Gray Athletic Cotton Socks - 6 Pairs");
  });
  it('product extraInfoHTML method',()=>{
    expect(document.querySelector('.test-container').innerHTML=`${product.extraInfoHTML()}`).toEqual('');
  });
  it('product stars rating method',()=>{
    expect(document.querySelector('.test-container').innerHTML=`${product.getStarsUrl()}`).toEqual(`images/ratings/rating-45.png`);
  });
  it('product rating count method',()=>{
    expect(document.querySelector('.test-container').innerHTML=`${product.getRating()}`).toEqual('87');
  });
  it('product priceCents method',()=>{
    expect(document.querySelector('.test-container').innerHTML=`${product.getPrice()}`).toEqual('$10.90');
  })
});
// describe('test Clothing class:',()=>{
//   it('clothing class test:',()=>{

//   });
// });
// describe('test Appliance class:',()=>{
//   it('appliance class test:',()=>{

//   });
// });