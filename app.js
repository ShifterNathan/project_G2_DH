const mainRouter = require('./src/routes/mainRoutes')

const express = require('express');
const path = require('path');
const app = express();
app.set('view engine', 'ejs');



app.use(express.static(path.resolve(__dirname, ('./public'))));

app.use('/', mainRouter)


app.listen(process.env.PORT || 3000, function () {
    console.log('Servidor corriendo en puerto 3000')
});
