const Router = require("express").Router;
const router = new Router();

const controller = require('../controllers/CategoriesController')

router.get('/', controller.getAllCategories);
router.post('/', controller.createCategory);


module.exports = router