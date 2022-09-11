const express = require('express')
const path = require('path')
const morgan = require('morgan')

const app = express()
const port = 3000

// morgan
app.use(morgan('tiny'))

// static files
console.log(path.join(__dirname, 'public'))
app.use('/static', express.static(path.join(__dirname, 'public')))

// routes
const route = require('./routes/index')
route(app)

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
