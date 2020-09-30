const express = require('express')
const router = express.Router()


router.post('/loginok', (req, res) => {
    const id = req.body.id
    const pw = req.body.password
    console.log(11);
    res.send(`${id}`)

})

module.exports = router