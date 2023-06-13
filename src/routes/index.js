const routers = require("express").Router();

routers.get('/', (req, res) => {
  res.send("Servidor online")
})

module.exports = routers;