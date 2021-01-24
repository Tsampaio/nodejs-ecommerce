const express = require('express');
const { home, register } = require('../controllers/pagesController');

const router = express.Router();
console.log("Inside routes");
router.get('/', home );

router.post('/register', register );

// router.post('/login', authController.login );

// router.get('/logout', authController.logout );


module.exports = router;