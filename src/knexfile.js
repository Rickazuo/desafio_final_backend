module.exports = {
    development: {
      client: 'sqlite3',
      connection: {
        filename: "./src/database/db.sqlite3"
      },
      useNullAsDefault: true, 
      migrations: {
        directory: __dirname + '/src/database/migrations', 
      },
    },
  };
  

