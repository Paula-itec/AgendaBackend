const express = require('express')
const cors = require('cors')
const routeContacts = require('./controllers/Contacts')
const app = express()
const version = ''
const notFound = require('./middleware/NotFound')


app.get('/', (req, res) => {
    res.send('<h1>Mi Agenda</h1>')
})

app.use(cors())
app.use(express.json())
app.use(version, routeContacts)
app.use(notFound)


module.exports = app