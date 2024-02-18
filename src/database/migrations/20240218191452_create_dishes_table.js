exports.up = function(knex) {
    return knex.schema.createTable('dishes', function(table) {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('description');
      table.string('category');
      table.string('image_url');
      table.decimal('price', 10, 2).notNullable();
      table.integer('user_id').unsigned().notNullable().references('id').inTable('users').onDelete('CASCADE');
      table.boolean('liked').defaultTo(false);
      table.timestamps(true, true);
      
      table.index('user_id');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('dishes');
  };
  