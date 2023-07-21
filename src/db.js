// db.js
const { Pool } = require('pg');

const pool = new Pool({
  user: 'alberto',
  host: '54.39.90.0',
  database: 'dados',
  password: '8Dn3GNRFkI6$',
  port: 5432, // porta padrão do PostgreSQL
});

// Função para executar uma consulta SQL no banco de dados
const query = async (text, params) => {
  const result = await pool.query(text, params);
  return result.rows;
};

module.exports = { query };
