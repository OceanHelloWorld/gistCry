const db = require('./db/user');
const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { urlGen, timestamp, unixTimeToTime } = require('./serverHelper');

app.use(function(req, res, next) {
  // console.log('app use: ', req.method, req.path);
  next();
})

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use(bodyParser.json());


app.post('/api/gists', (req, res) => {
  const {username} = req.body;
  db.getAllGists(username, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    } 
    res.json(result);
  })
})

app.post('/api/register', (req, res) => {
  const {username, password} = req.body;
  db.registerUser(username, password, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.sendStatus(201);
  })
})

app.post('/api/login', (req, res) => {
  const {username, password} = req.body;
  db.login(username, password, (err, result) => {
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

// TODO:change api/newGist to api/gist
app.post('/api/newGist', (req, res) => {
  const { star, username, intro, file_name, content, gist_edit } = req.body;
  let url = urlGen(username, gist_edit);  
  db.newGist(timestamp, star, username, url, intro, file_name, content, gist_edit, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    } else {
      res.json(result);
    }
  })
})


// process.env.port is for Heroku deployment
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));