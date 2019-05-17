const User = require('./db/user');
const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.use(function(req, res, next) {
  // console.log('app use: ', req.method, req.path);
  next();
})

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use(bodyParser.json());


app.get('/api/users', (req, res) => {
  User.getAll((err, users) => {
    if (err) {
      return res.status(500).send(err);
    } 
    res.json(users);
  })
  // const user = [
  //   {id: 1, firstName: 'John', lastName: 'Doe'},
  //   {id: 2, firstName: 'Ghost', lastName: 'Pepper'},
  //   {id: 3, firstName: 'Jala', lastName: 'Peno'}    
  // ]

  // res.json(user);
})

app.post('/api/register', (req, res) => {
  const {username, password} = req.body;
  User.add(username, password, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.sendStatus(201);
  })
})

app.post('/api/login', (req, res) => {
  const {username, password} = req.body;
  User.login(username, password, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    } else {
      if (result.length === 0) {
        res.json(false);
      } else {
        res.json(result);
      }
    }
  })
})




// process.env.port is for Heroku deployment
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));