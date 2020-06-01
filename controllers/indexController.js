const productModel = require('../models/product');

let indexController = {

    index : function(req, res) {
        res.render('index');
    },
    
    detail : function(req, res) {
        res.render('detail')
    },
    error : function(req, res) {
        res.render('error')
    },
    product_create_form : function(req, res) {
        res.render('product-create-form')
    },
    product_edit_form : function(req, res) {
        res.render('product-edit-form')
    },
    products : function(req, res) {
        res.render('products')
    },

    productsCreate: function (req, res) {
        const { name, price, discount, category, description } = req.body;
        productModel.save(name, price, discount, category, description, (err, id) => {
            if (err) res.status(500).render('error');
            res.redirect(`/products/detail/${id}`);
        });
    },

    productsDetailId: function (req, res) {
        const id = req.params.id;
        productModel.findById(id, (err, product) => {
            if (err) res.status(500).render('error');
            //crear pantalla 404
            if (!product) res.status(404).send('404');
            res.render('detail', { product });
        });
    },

    results : function(req, res) {
        res.render('results')
    }
 

};

module.exports = indexController;