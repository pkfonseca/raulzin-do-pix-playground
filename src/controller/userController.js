const userService = require("../model/userService");

const createUser = (req, res) => {
  let usarData = req.body

  if (!usarData?.nome || !usarData?.email) {
    res.status(500).send("Name or email is null");
    return
  }
  usarData.senha = '123';
  console.log("Creating user", usarData);

  userService.createUser(usarData, (error, result) => {
    if (error) {
      if (error.message === 'Email já cadastrado') {
        return res.status(400).json({ error: 'Email já cadastrado' });
      }

      return res.status(500).json({ error: 'Erro ao criar usuário' });
    }

    return res.status(200).json({ message: 'Usuário criado com sucesso', id: result.id });
  })
}

module.exports = {
  createUser
};