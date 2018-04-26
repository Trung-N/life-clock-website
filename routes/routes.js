const express = require('express');
const router = express.Router();
const controller = require('../controller/userController.js');

router.get('/',controller.login);
router.get('/login',controller.login);
router.get('/home',controller.home);
router.get('/addnewgoal',controller.addnewgoal);
router.get('/diets',controller.diets);
router.get('/goals',controller.goals);
router.get('/health',controller.health);
router.get('/signup',controller.signup);
router.get('/social',controller.social);
router.get('/workouts',controller.workouts);
router.post('/createUser', controller.createUser);



module.exports = router;
