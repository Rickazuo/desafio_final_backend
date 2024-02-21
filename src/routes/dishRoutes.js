const express = require('express');
const router = express.Router();
const dishController = require('../controllers/DishController');
const verifyToken = require('../middlewares/auth');

router.get('/dishes', verifyToken, dishController.getAll);
router.get('/dishes/:id', verifyToken, dishController.getById);

module.exports = router;