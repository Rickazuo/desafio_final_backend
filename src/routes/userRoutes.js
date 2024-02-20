const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');

router.post('/', userController.create);

module.exports = router;
