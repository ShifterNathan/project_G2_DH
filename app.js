const port = process.env.PORT || 3000
const express = require('express');
const path = require('path');
const app = express();
const methodOverride =  require('method-override'); // Para poder usar los métodos PUT y DELETE
const session = require('express-session');
const cookies = require('cookie-parser');
const userLoggedMiddleware = require('./src/middlewares/userLoggedMiddleware');

// ---------- Motor de plantillas ----------
app.set('view engine', 'ejs');
app.set('views', './views');


// ---------- Recursos estáticos ----------
app.use(express.static(path.join(__dirname, './public')));  // Necesario para los archivos estáticos en el folder /public


// ---------- Middlewares de aplicación ----------
app.use(express.urlencoded({ extended: false })); // para acceder a los datos del método POST
app.use(express.json()); // para acceder a los datos del método POST
app.use(methodOverride('_method')); // Para poder usar el method="POST" en el formulario por PUT y DELETE
app.use(session({
    secret: "Este es mi secreto", 
    resave: false, 
    saveUninitialized: false})); 
app.use(cookies());
app.use(userLoggedMiddleware);


// ---------- Rutas ----------
const mainRouter = require('./src/routes/mainRoutes')
const tiendaRouter = require('./src/routes/tiendaRouter');
const usuariosRouter = require('./src/routes/usuariosRouter');

app.use('/', mainRouter);
app.use('/tienda', tiendaRouter);
app.use('/usuario', usuariosRouter);


// ********** Comprobación de que el servidor está funcionando (Hard coded) **********
app.listen(port /3000, function () {
    console.log(`Servidor corriendo en puerto ${port}`)
});


// ********** Exportación de todo lo construido con express. No tocar **********
module.exports = app;
