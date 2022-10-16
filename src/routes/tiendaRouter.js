const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');

const tiendaController = require('../controllers/tiendaController');

//***  Configuración de multer  ****/
const multerDiskStorage = multer.diskStorage({
    
    destination: function(req, file, cb) {       
     cb(null, path.join(__dirname,"../../public/img/tiendaProductos"));   
    },
    
    filename: function(req, file, cb) {          
     let imageName = Date.now() + path.extname(file.originalname);  
     cb(null, imageName);         
    }
});

const uploadFile = multer({ storage: multerDiskStorage });


// ********** RUTAS **********

router.get('/', tiendaController.tienda);

router.get('/crear', tiendaController.crearProducto);
router.post('/crear', uploadFile.single('imagenProducto'), tiendaController.guardarProducto);





// ********** Exportación de las rutas. No tocar **********
module.exports = router;


