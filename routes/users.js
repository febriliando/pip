var express = require('express');
var router = express.Router();

const userController = require('../controller/user')

/* GET home page. */
router.get('/', userController.findAll);
router.post('/',userController.createUser);
// router.delete('/',userController.destroyUser)

module.exports = router;
// 