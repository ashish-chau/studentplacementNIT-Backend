const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;
require('dotenv').config();
require('./config/db'); // initialize DB

const authRoutes = require('./routes/authRoutes');
const placementRoutes = require('./routes/placementRoutes');

app.use(express.json());
app.use(cors());
app.use('/uploads', express.static('uploads'));


app.use('/api/auth', authRoutes);
app.use('/api/placements', placementRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
