const knex = require('../database/db')

module.exports = {
  async create(req, res) {
    try {
      const { name, description, category, image_url, price, user_id } = req.body;
  
      const [newDishId] = await knex('dishes').insert({
        name,
        description,
        category,
        image_url,
        price,
        user_id,
      });
  
      const newDish = await knex('dishes').where({ id: newDishId }).first();
  
      return res.status(201).json(newDish);
    } catch (error) {
      console.error('Error creating dish:', error);
      return res.status(500).json({ error: 'Failed to create dish' });
    }
  },
  

  async getAll(req, res) {
    try {
      const dishes = await knex('dishes');
      console.log(dishes)
      return res.status(200).json(dishes);
    } catch (error) {
      console.error('Error getting all dishes:', error);
      return res.status(500).json({ error: 'Failed to get all dishes' });
    }
  },

  async getById(req, res) {
    try {
      const { id } = req.params;
      const dish = await knex('dishes').where({ id }).first();

      if (!dish) {
        return res.status(404).json({ error: 'Dish not found' });
      }

      return res.status(200).json(dish);
    } catch (error) {
      console.error('Error getting dish by ID:', error);
      return res.status(500).json({ error: 'Failed to get dish by ID' });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const { name, description, category, image_url, price, user_id } = req.body;
  
      const updated = await knex('dishes').where({ id }).update({
        name,
        description,
        category,
        image_url,
        price,
        user_id,
      });
  
      if (!updated) {
        return res.status(404).json({ error: 'Dish not found' });
      }
  
      const updatedDish = await knex('dishes').where({ id }).first();
      return res.status(200).json(updatedDish);
    } catch (error) {
      console.error('Error updating dish:', error);
      return res.status(500).json({ error: 'Failed to update dish' });
    }
  },
  

  async delete(req, res) {
    try {
      const { id } = req.params;

      const deletedCount = await knex('dishes').where({ id }).del();

      if (deletedCount === 0) {
        return res.status(404).json({ error: 'Dish not found' });
      }

      return res.status(204).send();
    } catch (error) {
      console.error('Error deleting dish:', error);
      return res.status(500).json({ error: 'Failed to delete dish' });
    }
  }
};
