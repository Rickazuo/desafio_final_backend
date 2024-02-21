const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const knex = require('../database/db')

module.exports = {
  async create(req, res) {
    try {
      const { email, password } = req.body;

      const user = await knex('users').where({ email }).first();
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(401).json({ error: 'Invalid password' });
      }

      const token = jwt.sign({ userId: user.id }, process.env.SECRET_KEY, { expiresIn: '1h' });
      
      return res.status(200).json({ token, admin:user.administrator });
    } catch (error) {
      console.error('Error creating session:', error);
      return res.status(500).json({ error: 'Failed to create session' });
    }
  },
};
