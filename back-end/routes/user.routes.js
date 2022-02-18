const router = require('express').Router();
const userController = require('../controllers/user.controller');
const password = require('../middleware/password');


//auth
router.post('/signup',password,userController.signUp);
router.post('/login', userController.login);

//update
router.put('/:id', userController.update);
router.get('/:id', userController.getUser);

module.exports = router;
