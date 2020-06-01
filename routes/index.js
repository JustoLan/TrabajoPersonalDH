var express = require('express');
var router = express.Router();
var app = express()
const indexController = require('../controllers/indexController')

/* GET home page. */
router.get('/', indexController.index);

router.get('/products', indexController.products);

router.post('/products/create', indexController.productsCreate);

router.get('/products/detail/:id', indexController.productsDetailId);

router.get('/product-create-form', indexController.product_create_form);

router.get('/product-edit-form', indexController.product_edit_form);

router.get('/results', indexController.results);

router.get('/detail', indexController.detail);


module.exports = router;
