const express = require('express');
const router = express.Router();
const controller = require('../controller/userController.js');

router.get('/',controller.comingsoon);

router.get('/bye',controller.sayBye);

router.get('/users',controller.AllUsers);

router.get ('/users/:id',controller.User);

module.exports = router;