const express = require('express');
const router = express.Router();
const { createPlacement } = require('../controllers/placementController');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Wait until body is parsed by multer (multer parses it as part of handling multipart/form-data)
    const today = new Date().toISOString().split('T')[0];

    // Fall back if body values are not yet available (first file may come before fields)
    const studentName = req.body.studentName || 'unknownStudent';
    const companyName = req.body.companyName || 'unknownCompany';

    const folderName = `${studentName}_${companyName}_${today}`.replace(/\s+/g, '');
    const fullPath = path.join(__dirname, '..', 'uploads', folderName);

    // Ensure folder exists
    fs.mkdirSync(fullPath, { recursive: true });

    cb(null, fullPath);
  },

  filename: function (req, file, cb) {
    const safeName = file.originalname.replace(/\s+/g, '-');
    cb(null, `${Date.now()}-${safeName}`);
  }
});

// Upload middleware
const upload = multer({ storage });

// Define accepted file fields
const cpUpload = upload.fields([
  { name: 'offerLetter', maxCount: 1 },
  { name: 'studentEmail', maxCount: 1 },
  { name: 'feedbackEmail', maxCount: 1 },
]);

// Route to create placement
router.post('/', cpUpload, createPlacement);

module.exports = router;
