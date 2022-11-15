// Middleware de ruta

// Función MW: se va a encargar de ver si hay un usuario logueado en session 
//				y no dejarte seguir si esto pasa. Si no pasa, sigue el controlador.

function guestMw (req, res, next) {
    if(req.session.userLogged) {
        return res.redirect('/');
    }
    next();
}

module.exports = guestMw;

