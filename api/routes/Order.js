const express = require('express');
const router = express.Router();
const Order = require('../Models/Order');

// Create a new order
router.post('/', async (req, res) => {
    try {
      const {
        userId,
        customerId,
        productId,
        quantity,
        subtotal,
        total,
        delivery_status,
        payment_status
      } = req.body;
  
      const newOrder = new Order({
        userId,
        customerId,
        productId,
        quantity,
        subtotal,
        total,
        delivery_status,
        payment_status
      });
  
      const savedOrder = await newOrder.save();
      res.status(201).json(savedOrder);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
 

// Get all orders
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get one order by ID
router.get('/:id', async (req, res) => {
    try {
      const order = await Order.findById(req.params.id);
      if (order) {
        res.json(order);
      } else {
        res.status(404).json({ message: 'Order not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  // Delete one order by ID
router.delete('/:id', async (req, res) => {
    try {
      const deletedOrder = await Order.findByIdAndDelete(req.params.id);
      if (deletedOrder) {
        res.json({ message: 'Order deleted successfully' });
      } else {
        res.status(404).json({ message: 'Order not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  // Update one order by ID
  router.patch('/:id', async (req, res) => {
    try {
      const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (updatedOrder) {
        res.json(updatedOrder);
      } else {
        res.status(404).json({ message: 'Order not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  

module.exports = router;