var express = require('express');
var router = express.Router();

const users = [];

router.get('/', (req, res, next) => {
  res.json(users);
});

router.post('/', function (req, res) {
  let result = users.find((user) => user.email === req.body.email);
  if (result) {
    res.status(400).send();
    console.log('пользователь с таким email уже существует');
    console.log(users);
  } else {
    users.push(req.body);
    res.status(200).send({
      message: 'пользователь зарегистирован',
    });
    console.log('пользователь зарегистирован');
    console.log(users);
  }
});

module.exports = router;
