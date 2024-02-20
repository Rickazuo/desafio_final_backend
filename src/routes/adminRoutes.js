const express = require('express');
const router = express.Router();
const dishController = require('../controllers/DishController');

router.post('/admin/dishes', dishController.create);
router.put('/admin/dishes/:id', dishController.update);
router.delete('/admin/dishes/:id', dishController.delete);

module.exports = router;