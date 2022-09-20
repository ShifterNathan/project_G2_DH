const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, ('/public'))));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'))
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'))
});

app.get('/registro', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/registro.html'))
});

app.get('/producto', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/producto.html'))
});

app.get('/tienda', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/tienda.html'))
});

app.listen(3000, function () {
    console.log('Servidor corriendo en puerto 3000')
});
