var fs = require('fs');

console.log('첫번째 일입니다요');

var result = fs.readFileSync('example/test.txt', 'utf8');

console.log(result);

console.log('마지막 일입니다요');