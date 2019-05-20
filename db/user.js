const connection = require('./index');

const getAllGists = function(username, cb) {
  const queryString = 'SELECT * FROM gist_edits AS g INNER JOIN users AS u ON g.username = u.id WHERE u.username = ?';
  connection.query(queryString, [username], (err, data) => {
    if (err) {
      cb(err);
    } else {
      cb(null, data);
    }
  });
};

// getAllGists('admin2', (err, data) => {
//   console.log('data: ', data[0]['url']);
// });

const registerUser = function(username, password, cb) {
  const queryString = "INSERT INTO users (username, password) VALUES (?, ?)";
  connection.query(queryString, [username, password], (err, data) => {
    cb(err, data);
  });
};

const login = function(username, password, cb) {
  const queryString = "SELECT * FROM users WHERE username = ? AND password = ?";
  connection.query(queryString, [username, password], (err, data) => {
    if (err) {
      cb(err);
    } else {
      cb(null, data);
    }
  })
}

const newGist = function(timestamp, star, username, url, intro, file_name, content, gist_edit, cb) {
  // const queryString = "INSERT INTO gist_edits (timestamp, star, username, url) VALUES (?, ?, ?, ?); INSERT INTO files (intro, file_name, content, gist_edit) VALUES (?, ?, ?, ?)"
  const queryString1 = "INSERT INTO gist_edits (timestamp, star, username, url) VALUES (?, ?, ?, ?)";
  const queryString2 = "INSERT INTO files (intro, file_name, content, gist_edit) VALUES (?, ?, ?, ?)";

  connection.query(queryString1, [timestamp, star, username, url], (err, data) => {
    if (err) {
      console.log('err =', err);
      return err;
    }
    connection.query(queryString2, [intro, file_name, content, gist_edit], (err, data) => {
      if (err) {
        console.log('err =', err);
        return err;
      }
      cb(err, data);
    })
  });
}

newGist(1200, 0, 2, 'gf7w', 'test new file', 'server.js', 'const newServer = 10', 2, (err, data) => {
  if (err) {console.log('db new gist: ', err)}
  else {console.log('insert new gist success', data);}
})

// add("JackDorsey123", "P4ssWord123", (err, data) => {
//   if (err) {console.log(err)};
//   getAll((err, data) => console.log('register: ', err ? err : data));
// })

// login("JackDorsey123", "P4ssWord123", (err, data) => {
//   if (err) {
//     console.log('login db fail: ', err)
//   } else {
//     if (data.length === 0) {
//       console.log("login fail");
//     } else {
//       console.log('login db succes: ', data);
//     }
//   }
// })

module.exports = {
  getAllGists,
  registerUser,
  login,
  newGist
};
