var express = require('express')
var http = require('http')

var app = express()
var path = require('path')


// app.use('/public', express.static(path.join(__dirname, 'public')))
//! 앞의 public은 url, 뒤의 public 은 디렉토리 경로
app.use('/public', express.static('public'))
app.use('/', (req, res, next) => {

    console.log('첫 번째 미들웨어에서 요청을 처리함');

    next()
})

app.use('/', (req, res, next) => {

    console.log('두 번재 미들웨어에서 요청 처리');
    // res.redirect('https://www.google.com')
    var user = req.query.name
    res.send('ㅍㅍㅍ')

})

app.listen(3000)