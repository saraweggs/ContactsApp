// DEPENDENCIES
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }))

// LISTENER
app.listen(3000 , () => {
  console.log("Listening....");
})

app.get('/', (req, res) => {
  res.send('hello world!')
})

mongoose.connect('mongodb://localhost:27017/meancrud', { useNewUrlParser: true });
 mongoose.connection.once('open', ()=>{ 
  console.log('connected to mongoose...'); 
});
