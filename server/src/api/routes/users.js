const Router = require("express");
const router = new Router();

const controller = require('../controllers/UsersController')

router.patch('/update_username/:id', controller.updateUsername);
router.patch('/update_password/:id', controller.updateUserPassword);

module.exports = router