import toursController from "./controllers/toursController"
import express from "express"
const router = express.Router();

// Get All Members
router.get('/', toursController.getAllTours);

// Get Single Member by ID
router.get('/:id', toursController.getTourssById);

module.exports = router;