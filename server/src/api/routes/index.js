const Router = require('express').Router;
//const fileUpload = require("express-fileUpload");
//const cookieParser = require("cookie-parser");

const router = new Router();

//router.use(fileUpload());
//router.use(cookieParser());

const modules = ['auth', 'users', 'posts', 'categories']

modules.forEach(module => {
    router.use(`/api/${module}`, require(`./${module}`))
})

module.exports = router