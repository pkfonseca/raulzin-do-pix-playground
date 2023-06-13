const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

// Rota para criar um novo usuário
router.post('/createUser', userController.createUser);

module.exports = router;