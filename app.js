const http = require('http')
//4번째 줄이나 5번째 줄이나 같은 말이다
const server = new http.Server()
const server1 = http.createServer()
const app = require('express')()


server.listen(3000)

server.on('connection', (s) => {

    // ad = s.address().address
    // pt = s.address().port

})

server.on('request', (req, res) => {



})


const client = new http.ClientRequest()
const agent = new http.Agent()

