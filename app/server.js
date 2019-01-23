const express = require('express')
const app = express()

const { COOKIE_SECRET, PORT, HOST, NODE_ENV } = require('../config')

app.disable('x-powered-by');

if (NODE_ENV === 'development') {
    const cors = require('cors')
    app.use(cors())
}

const cookieParser = require('cookie-parser')
app.use(cookieParser(COOKIE_SECRET))

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const routes = require('./routes')
app.use('/', routes)

app.listen(PORT, HOST)

console.log(`API is started on http://${HOST}:${PORT} !`)

module.exports = app;