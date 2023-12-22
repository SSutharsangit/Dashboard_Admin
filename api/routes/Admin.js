const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();
const Admin = require('../Models/Admin');
const { isOrginalAdmin } = require('../Middleware/admin_middlewire');

// Admin Signup route
router.post('/signup', async (req, res) => {
    try {
      const { username, email, password } = req.body;
  
      const existingAdmin = await Admin.findOne({ email });
      if (existingAdmin) {
        return res.status(400).json({ error: 'Email is already in use' });
      }
  
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);
  
      const newAdmin = new Admin({
        username,
        email,
        password: hashedPassword,
      });
  
      const savedAdmin = await newAdmin.save();
  
      res.status(201).json({
        admin: {
          _id: savedAdmin._id,
          username: savedAdmin.username,
          email: savedAdmin.email,
          role: savedAdmin.role,
        },
        message: 'Admin signup successful',
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

// Admin Login route
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(401).json({ error: 'User not found' });
    }

    const passwordMatch = await bcrypt.compare(password, admin.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Incorrect password' });
    }

    const token = jwt.sign({ username: admin.username,role:admin.role }, 'your-secret-key', { expiresIn: '1h' });
    res.cookie('token', token, { httpOnly: true, maxAge: 3600000 }); 
    res.status(200).json({
      token,
      admin: {
        _id: admin._id,
        username: admin.username,
        email: admin.email,
        role: admin.role,
      },
      message: 'Admin login successful',
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// get all admin route
router.get('/', async (req, res) => {
    try {
      const admins = await Admin.find();
      res.status(200).json(admins);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
// Admin Delete route
router.delete('/:id', async (req, res) => {
    try {
      const deletedAdmin = await Admin.findByIdAndDelete(req.params.id);
      if (!deletedAdmin) {
        return res.status(404).json({ message: 'admin not found' });
      }
      res.status(200).json({ message: 'admin deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

module.exports = router;
