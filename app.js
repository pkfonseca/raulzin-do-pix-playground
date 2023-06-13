const express = require('express');
const cors = require('cors');
const app = express();
const port = 8081;

const usersRouter = require('./src/routes/users');

app.use(cors("*"));
app.use(express.json());
app.use('/users', usersRouter);

app.listen(port, () => {
  console.log(`Server online on port 192.168.1.22:${port}`);
});
