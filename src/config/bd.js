const { Pool } = require("pg");

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: 'raulzin',
  password: 'cross',
  user: 'postgres'
})

// function handleConnection(connection) {
//   console.log('Conexão estabelecida:', connection.processID);
// }

pool.on('connect', (connection) => {
  console.log('Conexão estabelecida: ', connection.processID);
});

module.exports = pool;