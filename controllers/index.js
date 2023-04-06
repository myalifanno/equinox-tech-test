const { Item } = require('../models')

class Controller {
    static home(req, res) {
        Item.findAll()
            .then(data => {
                res.render('home', { data })
                // res.send(data)
            })
            .catch(err => {
                res.send(err)
            })
    }
}

module.exports = Controller