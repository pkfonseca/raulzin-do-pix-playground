const userService = require("../model/userService");

const createUser = (req, res) => {
  let userData = req.body

  if (!userData?.nome || !userData?.email) {
    res.status(400).json({
      status: '(400) Bad request',
      message: 'Name or email is null',
      object: { ...userData }
    });
    return
  }
  userData.senha = '123';
  console.log("Creating user", userData);

  userService.createUser(userData, (error, result) => {
    if (error) {
      if (error.constraint === 'email_unico') {
        console.error('Error path: ', __filename);
        console.error('Linha: ',);
        console.error(error.message);
        console.error(error);
        return res.status(400).json({ error: error.message });
      }

      return res.status(500).json({ error: 'Erro ao criar usuário' });
    }

    return res.status(200).json({ message: 'Usuário criado com sucesso', id: result.id });
  })
}

module.exports = {
  createUser
};