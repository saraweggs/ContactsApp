const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
  name: {type: String, required: true},
  address: String,
  phone: String,
  email: String
})

module.exports = mongoose.model('Contacts', contactSchema);
