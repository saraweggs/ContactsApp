// DEPENDENCIES
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }))


const contactsController = require('./controllers/contacts_controller.js');
console.log(contactsController);
app.use('/contacts', contactsController);

mongoose.connect('mongodb://localhost:27017/meancrud', { useNewUrlParser: true });
 mongoose.connection.once('open', ()=>{ 
  console.log('connected to mongoose...'); 
});

// LISTENER
app.listen(3000 , () => {
  console.log("Listening....");
})
