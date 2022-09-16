const siteRouter = require('./site')
const friendsRouter = require('./friends')

function route(app) {

    app.use('/', siteRouter)

    app.use('/friends', friendsRouter)
}

module.exports = route
