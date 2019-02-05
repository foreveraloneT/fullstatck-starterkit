const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const routes = require('./routes/routes')

const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
// app.use(function (err, req, res, next) {
//   console.error(err.stack)
//   res.status(500).send('Something broke!')
// })
app.use('/', routes)

app.get('/', (req, res) => {
  res.send('hello, world.')
})

app.listen(3000, () => {
  console.log('server run')
})