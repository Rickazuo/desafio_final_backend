const express = require('express');
const router = express.Router();
const dishController = require('../controllers/DishController');
const verifyToken = require('../middlewares/auth')

router.post('/dishes', verifyToken, dishController.create);
router.get('/dishes/:id', verifyToken, dishController.getById);
router.put('/dishes/:id', verifyToken, dishController.update);
router.delete('/dishes/:id', verifyToken, dishController.delete);

module.exports = router;