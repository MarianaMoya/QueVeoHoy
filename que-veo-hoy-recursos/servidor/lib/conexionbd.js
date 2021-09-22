
var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  port     : '8080',
  user     : 'user',
  password : 'password',
  database : 'queveohoy'
});

module.exports = connection;