const bcrypt = require('bcrypt');
const knex = require('../database/db')


module.exports = {
  async create(req, res) {
    try {
      const { name, email, password } = req.body;

      const existingUser = await knex('users').where({ email }).first();
      if (existingUser) {
        return res.status(400).json({ error: 'User already exists' });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const [newUserId] = await knex('users').insert({
        name,
        email,
        password: hashedPassword,
      });

      const newUser = { id: newUserId, name, email };
      return res.status(201).json(newUser);
    } catch (error) {
      console.error('Error creating user:', error);
      return res.status(500).json({ error: 'Failed to create user' });
    }
  }
};
