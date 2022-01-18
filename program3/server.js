const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const bookRoute = require('./routes/book');

const app = express();

const PORT = 5000;
// Add your Mongodb url in below variable...
const MongoDBUrl ="mongodb://localhost:27017/book";
app.use(bodyParser.json());

app.use(cors());

app.use('/book', bookRoute);

mongoose.connect(MongoDBUrl, () => {  
  app.listen(PORT, () => {
    console.log('Server started on port number 5000');
  });
})

