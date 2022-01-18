const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const Inventory = require('./model/Inventory');

const app = express();

const PORT = 5000;
// Add your Mongodb url in below variable...
const MongoDBUrl = 'mongodb://localhost:27017/xyz';

app.use(bodyParser.json());
app.use(cors());

app.post('/', async (req, res, next) => {
  var newitem=Inventory({
    name: req.body.name,
    itemPrice: req.body.itemPrice,
    itemId: req.body.itemId,
    itemDescription: req.body.itemDescription,

  })

  try {
    inventory = await newitem.save();
  }catch (err) {
    console.log(err);
    return res.send('Error occurred while saving the data');
  }
  res.json({ inventory: inventory });
})

  app.get('/', async (req, res, next) => {
   let inventory;
  
    try {
      inventory = await Inventory.find();
    }catch (err) {
      console.log(err);
      return res.send('Error occurred while fetching the data');
    }

  res.json({ inventory: inventory });
})

mongoose.connect(MongoDBUrl, () => {
  app.listen(PORT, () => {
    console.log('Server started on port number 5000');
  });
})

