const Dish = require('../models/Dish'); // Supondo que você tenha um modelo Dish definido

module.exports = {
    async create(req, res) {
        try {
          const { name, description, category, image_url, price, user_id } = req.body;
      
          const newDish = await Dish.query().insert({
            name,
            description,
            category,
            image_url,
            price,
            user_id,
          });
      
          return res.status(201).json(newDish);
        } catch (error) {
          console.error('Error creating dish:', error);
          return res.status(500).json({ error: 'Failed to create dish' });
        }
      },
      

      async getAll(req, res) {
        try {
          const dishes = await Dish.query();
      
          return res.status(200).json(dishes);
        } catch (error) {
          console.error('Error getting all dishes:', error);
          return res.status(500).json({ error: 'Failed to get all dishes' });
        }
      },
      

      async getById(req, res) {
        try {
          const { id } = req.params;
          const dish = await Dish.query().findById(id);
      
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
      
          const updatedDish = await Dish.query().patchAndFetchById(id, {
            name,
            description,
            category,
            image_url,
            price,
            user_id,
          });
      
          if (!updatedDish) {
            return res.status(404).json({ error: 'Dish not found' });
          }
      
          return res.status(200).json(updatedDish);
        } catch (error) {
          console.error('Error updating dish:', error);
          return res.status(500).json({ error: 'Failed to update dish' });
        }
      },
      

      async delete(req, res) {
        try {
          const { id } = req.params;
      
          const deletedCount = await Dish.query().deleteById(id);
      
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
