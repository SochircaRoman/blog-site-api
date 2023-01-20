const Router = require("express").Router;
const router = new Router();

const controller = require('../controllers/UsersController')

router.patch('/updateUsername/:id', controller.updateUsername);
router.patch('/updatePassword/:id', controller.updateUserPassword);
router.delete('/deleteUser/:id', controller.deleteUser);

module.exports = router