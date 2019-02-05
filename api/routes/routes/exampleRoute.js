const express = require('express')

const exampleController = require('../controllers/exampleController')

const router = express.Router()

router.get('/', exampleController.get)

module.exports = router