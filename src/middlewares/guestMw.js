// Función MW: se va a encargar de ver que el usuario esté logueado para seguir avanzando.

function guestMw(req,res,next) { 
	if (req.session.usuarioLogueado == undefined) {
		next();
        } else {
	        res.send ("Esta página es sólo para invitados");
            };
};

module.exports = {guestMw}; 	

