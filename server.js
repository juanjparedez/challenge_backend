const express = require('express')
const bodyParser = require('body-parser')
const apiRouter = require('./routes/api')

require('dotenv/config')

require('./db')

const app = express()
const port = process.env.PORT || 3001

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use('/api', apiRouter)

app.listen(port, () => {
	console.log(`Api running at http://localhost:${port}`)
})
