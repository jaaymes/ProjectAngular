const express = require('express');

const ProductController = require('./Controllers/ProductController');

const routes = express.Router();

routes.get('/products', ProductController.show);
routes.get('/products/:id', ProductController.index);

routes.post('/products', ProductController.store);

routes.put('/products/:id', ProductController.update);

routes.delete('/products/:id', ProductController.destroy);

module.exports = routes;
