const pool = require('../config/db');

const addPlacement = async (data) => {
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
    offerLetter,
    studentEmail,
    feedbackEmail,
  } = data;

  const query = `
    INSERT INTO placements (
      batch_name, batch_time, start_date, course_name,
      student_name, mobile, email, company_name, location,
      technology, package, offer_letter, student_email, feedback_email
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  const values = [
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
  ];

  const [result] = await pool.query(query, values);

  return { id: result.insertId }; // You can fetch the row if needed
};

module.exports = { addPlacement };
