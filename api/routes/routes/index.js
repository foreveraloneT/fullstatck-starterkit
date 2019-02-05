const express = require('express')

const exampleRoute = require('./exampleRoute')

const router = express.Router()

router.use('/example', exampleRoute)

module.exports = router