const express = require('express')
const router = express.Router()

const MeController = require('../app/controllers/MeController')

router.get('/course/list', MeController.list)

module.exports = router
