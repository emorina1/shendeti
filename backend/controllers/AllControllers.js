
const LoginController = require('./Login/LoginController');


  const defineRoutes = (app) => {
    app.post('/loginform',                  LoginController.login);
  };
    module.exports = defineRoutes;
