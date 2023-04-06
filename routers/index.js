const express = require('express')
const router = express.Router()
const Controller = require('../controllers')

// home
router.get('/', Controller.home)
router.get('/:id', Controller.details)

module.exports = router