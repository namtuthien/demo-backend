const friendsRouter = require('./friends')

function route(app) {

    app.use('/friends', friendsRouter)
}

module.exports = route
