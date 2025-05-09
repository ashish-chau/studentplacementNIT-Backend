const { addPlacement } = require('../models/placementModel');

const createPlacement = async (req, res) => {
  try {
    const {
      batchName,
      batchTime,
      startDate,
      courseName,
      studentName,
      mobile,
      email,
      companyName,
      location,
      technology,
      package,
    } = req.body;

    // Handle file uploads with proper checks
    const offerLetter = req.files['offerLetter']?.[0]?.path || null;
    const studentEmail = req.files['studentEmail']?.[0]?.path || null;
    const feedbackEmail = req.files['feedbackEmail']?.[0]?.path || null;

    // Validate required fields
    if (!batchName || !batchTime || !startDate || !courseName || !studentName || !mobile || !email || !companyName || !location || !technology || !package) {
      return res.status(400).json({ success: false, message: 'Missing required fields' });
    }

    const newPlacement = await addPlacement({
      batchName,
      batchTime,
      startDate,
      courseName,
      studentName,
      mobile,
      email,
      companyName,
      location,
      technology,
      package,
      offerLetter,
      studentEmail,
      feedbackEmail,
    });

    // Returning success response with inserted placement ID
    res.status(201).json({message: 'Data Submit Successfully', success: true, data: newPlacement });
  } catch (err) {
    console.error('Error creating placement:', err);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

module.exports = { createPlacement };
