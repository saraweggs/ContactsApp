const express = require('express');
const router = express.Router();
const Contacts = require('../models/contacts.js');

// INDEX ROUTE
router.get('/', (req, res) => {
  Contacts.find({}, (err, foundContacts) => {
    res.json(foundContacts);
  });
});

// CREATE ROUTE
router.post('/', (req, res) => {
  Contacts.create(req.body, (err, createdContact) => {
    res.json(createdContact);
  });
});

// DELETE ROUTE
router.delete('/:id', (req, res) => {
  Contacts.findByIdAndRemove(req.params.id, (err, deletedContact) => {
    res.json(deletedContact);
  });
});

// UPDATE ROUTE
router.put('/:id', (req, res) => {
  Contacts.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedContact) => {
    res.json(updatedContact);
  });
});

module.exports = router;
