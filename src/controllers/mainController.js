const path = require('path');

const controller = {
    index: (req, res) => {
        res.render('index')
    },

    login: (req, res) => {
        res.render('login')
    },

    registro: (req, res) => {
        res.render('registro')
    }
}

module.exports = controller;