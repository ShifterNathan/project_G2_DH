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
     let imageName = Date.now() + file.originalname;  
     cb(null, imageName);         
    }
});

const uploadFile = multer({ storage: multerDiskStorage });


// ********** RUTAS **********

/* La tienda */ 
router.get('/', tiendaController.tienda);

/* Crear un producto que va a la tienda y guardarlo */ 
router.get('/crear', tiendaController.crearProducto);
router.post('/crear', uploadFile.single('imagenProducto'), tiendaController.guardarProducto);

/* Detalle de un producto cuando lo tocas particularmente en la tienda */ 
router.get('/detalle/:id', tiendaController.detalleProducto)

/* Para editar un producto de la tienda */ 
// router.get('/editar/:id', tiendaController.editarProducto)
// router.put('/editar/:id', tiendaController.editarProducto)

/*** Para eliminar un producto de la tienda ***/ 

router.delete('/delete/:id', tiendaController.destroy); 


// ********** Exportación de las rutas. No tocar **********
module.exports = router;


