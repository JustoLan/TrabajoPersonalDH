const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const products = [];

const productModel = {
  save: (name, price, discount, category, description, callback) => {
    const id = uuidv4();

    const productObject = {
      id,
      name,
      price,
      discount,
      category,
      description,
		};
		
		//version asincrona

    fs.readFile('./data/products.json', (err1, text) => {
      if (err1) callback(err1);

      const products = JSON.parse(text);
      products.push(productObject);
      fs.writeFile('./data/products.json', JSON.stringify(products), (err2) => {
        if (err2) callback(err2);
        callback(null, id);
      });
    });
  },
  findById: (id, callback) => {
    fs.readFile('./data/products.json', (err, text) => {
      if (err) callback(err);
      const products = JSON.parse(text);
      const productObject = products.find((product) => product.id === id);
      callback(null, productObject);
    });
  }
};

module.exports = productModel;


// nombre de producto
// precio de producto
// descuento
// cateogria (1 de 2)
// descripcion