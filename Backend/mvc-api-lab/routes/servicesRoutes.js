import servicesController from "./controllers/servicesController"
import express from "express"
const router = express.Router();

// Get All Members
router.get('/', servicesController.getAllServices);

// Get Single Member by ID
router.get('/:id', servicesController.getServicesById);

module.exports = router;