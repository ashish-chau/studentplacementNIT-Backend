const db = require('../config/db');

const getMobileById = async (id) => {
  const [rows] = await db.execute('SELECT mobile FROM placements WHERE id = ?', [id]);
  return rows;
};


module.exports = {
  getMobileById,
  
};
