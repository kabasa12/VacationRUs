const express = require('express');
const router = express.Router();


const usersController = require('../controllers/usersController');

router.get('/getUsers', usersController.getUsers);
router.get('/getUserById', usersController.getUserById);
router.get('/getUserByEmail', usersController.getUserByEmail);
router.get('/getStatistics', usersController.getStatistics);
router.post('/insertUser', usersController.insertUser);
router.put('/updateUserByid', usersController.updateUserByid);


module.exports = router;