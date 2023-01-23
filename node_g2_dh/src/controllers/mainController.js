const path = require('path');

const controller = {
    index: (req, res) => {
        res.render('index', { user: req.session.userLogged })
    },

    faq: (req, res) => {
        res.render('preguntas_frecuentes', { user: req.session.userLogged })
    },

    nosotros: (req, res) => {
        res.render('nosotros', { user: req.session.userLogged })
    },

    elegirnos: (req, res) => {
        res.render('por_que_elegirnos', { user: req.session.userLogged})
    },

    galeria: (req, res) => {
        res.render('galeria', { user: req.session.userLogged})
    }
}

// ********** Exportación del controlador del main. No tocar **********
module.exports = controller;