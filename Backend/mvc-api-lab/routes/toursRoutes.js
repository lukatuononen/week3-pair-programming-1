
const toursController = require('../controllers/toursController');
const express = require('express');
const router = express.Router();

// Get All Members
router.get('/', toursController.getAllTours);

// Get Single Member by ID
router.get('/:id', toursController.getToursById);

module.exports = router;