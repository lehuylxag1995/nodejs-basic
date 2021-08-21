const express = require('express')
const router = express.Router()

const MeController = require('../app/controllers/MeController')

router.get('/course/list', MeController.listCourse)
router.get('/course/trash', MeController.trashCourse)

module.exports = router
