const express = require('express')
const router = express.Router()


router.get('/login', (req, res) => {
    res.send("가입 완료")
})

module.exports = router