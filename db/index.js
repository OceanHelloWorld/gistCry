const mysql = require('mysql');

const connection = mysql.createConnection({
  host : 'localhost', 
  user : 'root',
  password : '',
  database : 'gist_list',

});

connection.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('connected to mysql in db!');
});


// connection.query('SELECT * FROM users', (err, data) => {
//   console.log(err ? err : data)
// })


module.exports = connection;


// connection.query
