const connection = require('./index');

// get all the groceries
const getAll = function(cb) {
  const queryString = 'SELECT * FROM users';
  connection.query(queryString, (err, data) => {
    if (err) {
      cb(err);
    } else {
      cb(null, data);
    }
  });
};

const add = function(username, password, cb) {
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

// add("JackDorsey123", "P4ssWord123", (err, data) => {
//   if (err) {console.log(err)};
//   getAll((err, data) => console.log('register: ', err ? err : data));
// })

login("JackDorsey123", "P4ssWord123", (err, data) => {
  if (err) {
    console.log('login db fail: ', err)
  } else {
    if (data.length === 0) {
      console.log("login fail");
    } else {
      console.log('login db succes: ', data);
    }

  }

})

module.exports = {
  getAll,
  add,
  login,
};
