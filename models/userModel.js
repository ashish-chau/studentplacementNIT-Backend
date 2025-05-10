const db = require('../config/db'); // your db connection file

exports.findByMobile = async (mobile) => {
  const [rows] = await db.execute('SELECT * FROM users WHERE mobile = ?', [mobile]);
  return rows[0];
};

exports.insertUser = async ( mobile, password) => {
  const [result] = await db.execute('INSERT INTO users (mobile, password) VALUES (?, ?)', [mobile, password]);
  return result;
};
