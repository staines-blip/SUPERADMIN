const express = require('express');
const router = express.Router();
const Customer = require('../models/Customer');
 // Import the Customer model
const path = require('path');
console.log('Resolved path:', path.resolve(__dirname, './models/Customer.js'));

// Create a new customer
router.post('/', async (req, res) => {
    try {
      const customer = new Customer(req.body);
      await customer.save();
      res.status(201).send(customer);
    } catch (error) {
      console.error('Error creating customer:', error);
      res.status(400).send({ error: error.message });
    }
  });

// Get all customers
router.get('/customers', async (req, res) => {
  try {
    const customers = await Customer.find();
    res.status(200).send(customers);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get a customer by ID
router.get('/customers/:id', async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);
    if (!customer) {
      return res.status(404).send('Customer not found');
    }
    res.status(200).send(customer);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update a customer by ID
router.put('/customers/:id', async (req, res) => {
  try {
    const customer = await Customer.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!customer) {
      return res.status(404).send('Customer not found');
    }
    res.status(200).send(customer);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete a customer by ID
router.delete('/customers/:id', async (req, res) => {
  try {
    const customer = await Customer.findByIdAndDelete(req.params.id);
    if (!customer) {
      return res.status(404).send('Customer not found');
    }
    res.status(200).send(customer);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;