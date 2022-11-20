/* Middleware de ruta
    Función MW: se va a encargar de ver que el usuario esté logueado para seguir avanzando. */

function authMiddleware (req, res, next) {
    if(!req.session.userLogged) {
        return res.redirect('/usuario/ingreso');
    }
    next();
}

module.exports = authMiddleware; 