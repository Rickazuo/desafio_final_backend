exports.up = function(knex) {
    return knex.schema.table('users', function(table) {
      table.renameColumn('nome', 'name');
      table.renameColumn('senha', 'password');
      table.renameColumn('administrador', 'administrator');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.table('users', function(table) {
      table.renameColumn('name', 'nome');
      table.renameColumn('password', 'senha');
      table.renameColumn('administrator', 'administrador');
    });
  };
  