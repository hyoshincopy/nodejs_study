const express = require('express')
const app = express()
const UserLogin = require('./routes/user.login')
const UserLoginOk = require('./routes/user.loginok')
const cookieParser = require('cookie-parser')
// app.use('/public', express.static(path.join(__dirname, 'public')))
app.use(cookieParser())
app.use('/show', (req, res) => {
    res.send(req.cookies)
})
app.use('/', (req, res) => {

    res.cookie('user', {
        id: 'mike',
        name: '트와이스',
        authorized: true
    })
    res.redirect('/show')

})


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
//!  앞의 public은 url, 뒤의 public 은 디렉토리 경로
app.use('/public', express.static('public'))
app.use('/routes', UserLogin)
app.use('/routes', UserLoginOk)
app.use((e) => console.log(e.message))
app.listen(3000)