const connection = require('./index');

// get all the groceries
const getAll = function(cb) {
  var queryString = 'SELECT * FROM users';
  connection.query(queryString, (err, data) => {
    if (err) {
      cb(err);
    } else {
      cb(null, data);
    }
  });
};

const add = function(username, password, cb) {
  var queryString = "INSERT INTO users (username, password) VALUES (?, ?)";
  connection.query(queryString, [username, password], (err, data) => {
    cb(err, data);
  });
};

// add("JackDorsey123", "P4ssWord123", (err, data) => {
//   if (err) {console.log(err)};
//   getAll((err, data) => console.log('register: ', err ? err : data));
// })

module.exports = {
  getAll,
  add,
};
