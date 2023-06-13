const { Pool } = require("pg");

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: 'yourdatabase',
  password: 'yourpassword',
  user: 'youruser'
})

function handleConnection(connection) {
  console.log('Conexão estabelecida:', connection.processID);
}

pool.on('connect', handleConnection);

module.exports = pool;