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
      res.status(500).send(err);
    } else {
      res.json(users);
    }
  })
  // const user = [
  //   {id: 1, firstName: 'John', lastName: 'Doe'},
  //   {id: 2, firstName: 'Ghost', lastName: 'Pepper'},
  //   {id: 3, firstName: 'Jala', lastName: 'Peno'}    
  // ]

  // res.json(user);
})






const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));