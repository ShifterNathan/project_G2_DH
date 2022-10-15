const mainRouter = require('./src/routes/mainRoutes')
const port = process.env.PORT || 3000
const express = require('express');
const path = require('path');
const app = express();

// ---------- Motor de plantillas ----------
app.set('view engine', 'ejs');
app.set('views', './views');


// ---------- Recursos estáticos ----------
app.use(express.static('public'));

// ---------- Rutas ----------
const tiendaRouter = require('./src/routes/tiendaRouter');

app.use('/', mainRouter);
app.use('/tienda', tiendaRouter);


// ********** Comprobación de que el servidor está funcionando (Hard coded) **********
app.listen(port, function () {
    console.log(`Servidor corriendo en puerto ${port}`)
});




// ********** Exportación de todo lo construido con express. No tocar **********
module.exports = app;
