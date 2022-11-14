const path = require('path');

const controller = {
    index: (req, res) => {
        res.render('index')
    },

    faq: (req, res) => {
        res.render('preguntas_frecuentes')
    }

}

// ********** Exportación del controlador del main. No tocar **********
module.exports = controller;