const app = module.exports = require('express')()

app.get('/', (req, res) => {
    res.json({ message: 'Hello from the API Structure' })
})

/* here require all routes , EXAMPLE :

app.use('/auth', require('./auth'))
*/

app.all('*', (req, res) => {
    res.status(404).json({ message: 'Page not found' })
})