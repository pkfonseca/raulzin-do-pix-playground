const db = require('../config/bd');

const createUser = (userData, callback) => {
  const { nome, email, senha, usuario, chave_pix, status } = userData;

  const query = {
    text: 'INSERT INTO usuario(nome, email, senha, usuario, chave_pix, status, data_cadastro) VALUES($1, $2, $3, $4, $5, $6, CURRENT_DATE) RETURNING *',
    values: [nome, email, senha, usuario, chave_pix, status]
  };

  db.query(query, (error, result) => {
    if (error) {
      if (error.code === '23505' && error.constraint === 'email_unico') {
        const duplicateEmailError = new Error('Email já cadastrado');
        return callback(duplicateEmailError);
      }
      console.error('createUser() error:', error);
      return callback(error);
    } else {
      const user = result.rows[0];
      console.log("User created", user);
      callback(null, user);
    }
  });
}

module.exports = {
  createUser
}