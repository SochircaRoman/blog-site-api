const Router = require("express").Router;
const router = new Router();

const controller = require('../controllers/CategoriesController')

router.post('/', controller.createCategory);


module.exports = router