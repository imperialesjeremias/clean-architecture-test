require('dotenv').config()
const express = require('express')
const RouterMain = require('./routes/index')
const app = express()

const routes = new RouterMain(app)
routes.routes()


app.get('/', (req, res) => {
    res.send('Inicioo')
})

app.listen(3000, () => {
    console.log('Server on port 3000')
})
