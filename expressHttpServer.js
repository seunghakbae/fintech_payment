// Express.js, 또는 간단히 익스프레스는 Node.js를 위한 웹 프레임워크의 하나
// nodejs로 웹서버에 필요한 기능을 하나하나 다 짜면 너무 귀찮다. 
// 웹 프레임워크를 사용하여 편하게 프레임워크에 따라 Web을 만들 수 있다.
// 비슷한 예로 python의 flask나 Java의 Spring이 있다. 
// localhost 3000에 열린다. 
// ejs

const express = require('express')
const app = express()

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('/', function (req, res) {
    res.render('firstPage')
    console.log("first page connected");
})

app.get('/home', function (req, res) {
    res.render('home')
    console.log("connected to home")
})

app.get('/member', function (req, res) {
    res.render('member')
    console.log("connected to member")
})

app.post('/join', function(req, res){
    console.log(req.body)
})

app.listen(3000)