const express = require('express');
const router = express.Router();
const sessionController = require('../controllers/SessionController');
const userController = require('../controllers/UserController');

router.post('/login', sessionController.create);
router.post('/register', userController.create);

module.exports = router;