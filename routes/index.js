var express = require('express');
var router = express.Router();

const homeController = require('../controller/home')

/* GET home page. */
router.get('/', homeController.findAll);
router.post('/',homeController.createItem);
// router.delete('/',homeController.destroyItem)

module.exports = router;
