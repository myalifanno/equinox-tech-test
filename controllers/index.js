const { Item } = require('../models')

class Controller {
    static home(req, res) {
        Item.findAll()
            .then(data => {
                res.render('home', { data, isSuccess: true })
                // res.send(data)
            })
            .catch(err => {
                res.send(err)
            })
    }

    static details(req, res) {
        const id = +req.params.id
        Item.findByPk(id)
            .then(data => {
                res.render('details', { data, isSuccess: true })
                // res.send(data)
            })
            .catch(err => {
                res.send(err)
            })
    }
}

module.exports = Controller