// Middleware de ruta

// Función MW: se va a encargar de ver que el usuario esté logueado para seguir avanzando. 
// Lo vamos a utilizar por ejemplo en la vista del perfil del usuario, o sea sólo puede llegar acá si está logueado y en session.

function authMw (req, res, next) {
    if(!req.session.userLogged) {
        return res.redirect('/usuario/ingreso');
    }
    next();
}

module.exports = authMw; 