
class FriendsController {

    // [GET]    /friends/
    index(req, res) {
        res.render('friends.pug')
    }

    // [GET]    /friends/birthday
    birthday(req, res) {
        res.send('trang birthday')
    }

    // [GET]    /friends/requests
    requests(req, res) {
        res.send('trang requests')
    }

}

module.exports = new FriendsController
