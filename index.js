const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;
require('dotenv').config();
require('./config/db'); // initialize DB

const authRoutes = require('./routes/authRoutes');
const placementRoutes = require('./routes/placementRoutes');
const verificationRoutes = require('./routes/verificationRoutes');

app.use(express.json());
app.use(cors());
app.use('/uploads', express.static('uploads'));


app.use('/api/auth', authRoutes);
app.use('/api/placements', placementRoutes);
app.use('/api/verify', verificationRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
