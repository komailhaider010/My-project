const express = require('express');
const router = express.Router();
const multer = require('multer');
const fs = require('fs');

const {
    signUp,
    login,
    userDashBoard,
    updateUserProfile,
} = require('../controllers/userController')

const storage = multer.diskStorage({
    destination: async function (req, file, cb) {

        const uploadDirectory = './public/profileImages';
        if (!fs.existsSync(uploadDirectory)) {
            fs.mkdirSync(uploadDirectory);
        }
        cb(null, './public/profileImages')
    },
    filename: async function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.originalname.split('.').pop());
    }
});

const upload = multer({ storage: storage });


router.post('/signup', signUp);
router.post('/login', login);
router.get('/home/:userid', userDashBoard);
router.patch('/updateuser/:userid', upload.single('profileImg'), updateUserProfile);

module.exports = router;