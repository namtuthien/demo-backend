const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('trang friends')
})

router.get('/birthday', (req, res) => {
    res.send('trang birthday')
})

router.get('/requests', (req, res) => {
    res.send('trang requests')
})

module.exports = router
