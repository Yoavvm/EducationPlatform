const userController = require('../controllers/users.controller.js');

const router = require('express').Router();

router.get('/', userController.getAllUsers);

module.exports = router;

