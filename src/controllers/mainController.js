const path = require('path');

const controller = {
    index: (req, res) => {
        res.render('index')
    }

}

// ********** Exportación del controlador del main. No tocar **********
module.exports = controller;