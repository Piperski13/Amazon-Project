const fs = require('fs');
const express = require('express');
const cors = require('cors'); 

const app = express();

app.use(cors()); // Use cors middleware

const products = JSON.parse(fs.readFileSync('./backend/products.json','utf-8'));

app.get('/amazon.html',(req,res)=>{
  res.status(200).json(products)
});

const port = 3000;
app.listen(port,()=>{
  console.log(`Port ${port} is waiting for a request...`);
})