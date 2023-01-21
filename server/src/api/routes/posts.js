const Router = require("express").Router;
const router = new Router();

const controller = require('../controllers/PostsController')

router.post('/', controller.createPost);
router.patch('/:id', controller.updatePost);
router.delete('/:id', controller.deletePost);

module.exports = router