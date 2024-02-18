const bcrypt = require('bcrypt');
const User = require('../models/User'); // Supondo que você tenha um modelo User definido

module.exports = {
  async create(req, res) {
    try {
      const { name, email, password } = req.body;

      const existingUser = await User.query().findOne({ email });
      if (existingUser) {
        return res.status(400).json({ error: 'User already exists' });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = await User.query().insert({
        name,
        email,
        password: hashedPassword,
      });

      return res.status(201).json(newUser);
    } catch (error) {
      console.error('Error creating user:', error);
      return res.status(500).json({ error: 'Failed to create user' });
    }
  },
};
