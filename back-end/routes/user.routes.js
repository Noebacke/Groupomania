const router = require('express').Router();
const userController = require('../controllers/user.controller');
const password = require('../middleware/password');
const auth = require('../middleware/auth');

//auth
router.post('/signup',password,userController.signUp);
router.post('/login', userController.login);

//update
router.put('/:id', auth,userController.updatePassword);
router.put('/:id', auth,userController.updateName);
router.put('/:id', auth,userController.updateEmail);
router.get('/', auth,userController.getUser);

module.exports = router;
