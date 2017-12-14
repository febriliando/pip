var express = require('express');
var router = express.Router();

const userController = require('../controller/user')

/* GET home page. */
router.get('/', userController.findAll);
router.get('/:id', userController.findById)
router.post('/',userController.createUser);
router.delete('/:id',userController.destroyUser);
router.post('/search', userController.search)

module.exports = router;