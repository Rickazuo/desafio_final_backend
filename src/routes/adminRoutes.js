const express = require('express');
const router = express.Router();
const dishController = require('../controllers/DishController');

router.post('/dishes', dishController.create);
router.put('/dishes/:id', dishController.update);
router.delete('/dishes/:id', dishController.delete);

module.exports = router;
