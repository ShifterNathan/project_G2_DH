function dashboardMiddleware (req, res, next) {
    if(req.session.userLogged.rol == "COMUN") {
        return res.redirect('/');
    }
    next();
}

module.exports = dashboardMiddleware; 