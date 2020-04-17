const express = require('express');
const router = express.Router();
const aut = require('../auth/jwtAuth');

const authController = require('../controllers/authController');

router.post('/login',aut, authController.login);
router.post('/signUp',aut, authController.signUp);

module.exports = router;