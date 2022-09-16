const express = require('express')
const path = require('path')
const morgan = require('morgan')

const app = express()
const port = 3000

// template engine: pug
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'resources', 'views'))

// morgan
app.use(morgan('tiny'))

// static files
app.use('/static', express.static(path.join(__dirname, 'public')))

// routes
const route = require('./routes/index')
route(app)

app.listen(port, () => {
    console.log(`App listening on 127.0.0.1:${port}`)
})
