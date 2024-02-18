// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
    development: {
      client: 'sqlite3',
      connection: {
        filename: "./src/database/db.sqlite"
      },
      useNullAsDefault: true, 
      migrations: {
        directory: __dirname + '/src/database/migrations', 
      },
      seeds: {
        directory: __dirname + '/src/database/seeds',
      }
    },
  };
  

