const mongoose = require('mongoose')

//Connection URL
const connectString = 'mongodb+srv://admin:admin@cluster0.srqmd.mongodb.net/agenda?retryWrites=true&w=majority'
console.log('Conectando a la base de datos')
bdd = mongoose.connect(connectString, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conexión exitosa'))
    .catch((e) => console.log('Fallo en la conexión:', e.message))
