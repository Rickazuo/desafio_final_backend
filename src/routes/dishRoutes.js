const express = require('express');
const router = express.Router();
const dishController = require('../controllers/DishController');

router.get('/dishes', dishController.getAll);
router.get('/dishes/:id', dishController.getById);

module.exports = router;