const User = require('../models/userModel');

exports.login = async (req, res) => {
  const { mobile, password } = req.body;

  try {
    const user = await User.findByMobile(mobile);

    if (user && user.password === password) {
      res.json({ message: 'Login successful', user });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

exports.register = async (req, res) => {
  const { mobile, password } = req.body;

  try {
    const existingUser = await User.findByMobile(mobile);
    if (existingUser) {
      return res.status(409).json({ message: 'Mobile already registered' });
    }

    const result = await User.insertUser(mobile, password);
    res.status(201).json({ message: 'User registered successfully', userId: result.insertId });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
