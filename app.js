const fs = require('fs');
const express = require('express');
const cors = require('cors');
const dayjs = require('dayjs');
const { v4: uuidv4 } = require('uuid'); // id generator package
const deliveryOptions = require('./backend/deliveryOptions.js');

const app = express();


app.use(express.json()); //middleware
app.use(cors()); //middleware


const products = JSON.parse(fs.readFileSync('./backend/products.json','utf-8'));

app.get('/amazon.html',(req,res)=>{
  res.status(200).json(products)
});

app.post('/amazon.html',(req,res)=>{  
  const currentTime = dayjs().toISOString();
  const cart = req.body;
  let priceCentsTotal=0;
  let matchingItem;
  let newCart=[];

  cart.forEach(item => {
    
    products.forEach(product =>{
      if(product.id === item.productId){
        matchingItem = product;
        newCart.push(matchingItem);
      }
    })
  });
  
  newCart.forEach(element => {
    priceCentsTotal += element.priceCents;
  });

  let order = cart.map(cartItem =>{
    const itemNumberOption = parseInt(cartItem.deliveryOptionId);
    const finalOption = deliveryOptions[itemNumberOption-1];
    const estimatedDeliveryTime = dayjs().add(finalOption.deliveryDays,'days').toISOString();
    return {
      productId: cartItem.productId,
      quantity: cartItem.quantity,
      estimatedDeliveryTime: estimatedDeliveryTime,
      variation: null
    }
  });

  res.status(201).json({
    id: uuidv4(),
    orderTime: currentTime,
    totalCostCents: priceCentsTotal,
    products: order
  })         
});

const port = 3000;
app.listen(port,()=>{
  console.log(`Port ${port} is waiting for a request...`);
})