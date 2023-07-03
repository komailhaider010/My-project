const express = require('express');
const router = express.Router();

const {
    signUp,
    login,
    userDashBoard,
} = require('../controllers/userController')



router.post('/signup', signUp );
router.post('/login', login);
router.get('/home/:userid', userDashBoard);

module.exports = router;