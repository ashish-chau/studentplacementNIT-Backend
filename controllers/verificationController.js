const VerificationModel = require('../models/verificationModel');

const getMobileNumberById = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await VerificationModel.getMobileById(id);

    if (result.length === 0) {
      return res.status(404).json({ message: 'No record found for the given ID' });
    }

    res.status(200).json({ mobile: result[0].mobile, message: 'Mobile number retrieved successfully' });

  } catch (error) {
    console.error('Error fetching mobile number:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};



module.exports = {
  getMobileNumberById,
  
};
