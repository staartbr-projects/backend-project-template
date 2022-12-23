const path = require('node:path');

module.exports = {
  client: 'mysql2',
  connection: {
    host: 'localhost',
    port: 3306,
    user: 'seu_usuario',
    password: 'sua_senha',
    database: 'staart-db',
  },
  seeds: {
    directory: path.resolve(__dirname, 'src', 'database', 'seeds'),
  },
  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'migrations')
  },
  useNullAsDefault: true
};
