require('./src/mongo')
const app = require('./src/app')
const routeContacts = require('./src/controllers/Contacts')


const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})