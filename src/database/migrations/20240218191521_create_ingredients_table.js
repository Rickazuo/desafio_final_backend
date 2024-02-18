exports.up = function(knex) {
    return knex.schema.createTable('ingredients', function(table) {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.integer('dish_id').unsigned().notNullable().references('id').inTable('dishes').onDelete('CASCADE');
      table.timestamps(true, true);
  
      table.index('dish_id');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('ingredients');
  };
  