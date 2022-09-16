const express = require('express')
const router = express.Router()

const friendsController = require('../app/controllers/FriendsController')

router.get('/', friendsController.index)

router.get('/birthday', friendsController.birthday)

router.get('/requests', friendsController.requests)

module.exports = router
