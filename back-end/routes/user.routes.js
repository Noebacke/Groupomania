const router = require('express').Router();
const userController = require('../controllers/user.controller');
const password = require('../middleware/password');
const auth = require('../middleware/auth');

//auth
router.post('/signup',password,userController.signUp);
router.post('/login', userController.login);

//update
router.put('/:id', auth,userController.update);
router.get('/:id', auth,userController.getUser);

module.exports = router;
