const Router = require("express").Router;
const router = new Router();

const controller  = require("../controllers/AuthController")

router.post('/register', controller.register);
//router.post('/login', controller.login);
//router.post('/logout', controller.logout);
//router.get('/activate/:link', controller.activate);

module.exports = router