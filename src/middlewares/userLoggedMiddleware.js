// Middleware de aplicación

// Función MW: sirve para ver si hay alguien en session y mostrarle tal o cual cosa.

// function userLoggedMiddleware (req, res, next) {
    
//     res.locals.isLogged = false;

//     let emailInCookie = req.cookies.emailUsuario;
// 	let userFromCookie = User.findByField('emailUsuario', emailInCookie);

// 	if (userFromCookie) {
// 		req.session.userLogged = userFromCookie;
// 	}

//     if(req.session.userLogged){
//         res.locals.isLogged = true;
//         res.locals.userLogged = req.session.userLogged; // se pasa lo que tenes en session a variable local
//     }

//     next();
// };

//module.exports = userLoggedMiddleware;