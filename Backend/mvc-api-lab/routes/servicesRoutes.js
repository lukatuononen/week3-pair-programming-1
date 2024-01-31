
const servicesController = require('../controllers/servicesController');
const express = require('express');
const router = express.Router();

// Get All Members
router.get('/', servicesController.getAllServices);

// Get Single Member by ID
router.get('/:id', servicesController.getServicesById);

module.exports = router;