// database에 연결하는 방법
// npm에서 mysql을 다운로드한다. 
// mysql에 연결한다. user와 password는 예전 mysql localhost를 만들 때 사용했던 root와 password를 사용한다. 
// database는 mysql에 있는 database를 사용한다. 

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '0717',
  database : 'fintech'
});

connection.connect();
 
// connection.query는 비동기 방식이다. 


connection.query('SELECT * FROM user', function (error, results, fields) {
  if (error) throw error;
  console.log('The result is: ', results);
});
 
connection.end();