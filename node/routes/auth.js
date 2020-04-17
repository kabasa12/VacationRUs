const express = require('express');
const router = express.Router();


const authController = require('../controllers/authController');

router.get('/login', authController.login);
router.get('/signUp', authController.signUp);

module.exports = router;