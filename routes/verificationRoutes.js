const express = require('express');
const router = express.Router();
const verificationController = require('../controllers/verificationController');

// GET mobile number by ID
router.get('/:id', verificationController.getMobileNumberById);

module.exports = router;
