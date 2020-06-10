const Product = require('../models/Product');

module.exports = {
  async show(req, res) {
    const products = await Product.findAll();

    return res.json(products);
  },

  async index(req, res) {
    const products = await Product.findByPk(req.params.id);

    if (!products) {
      return res.json({ message: 'Producto Não Existe' });
    }

    return res.json(products);
  },

  async store(req, res) {
    const {
      name, price, description,
    } = req.body;

    const product = await Product.create({
      name,
      price,
      description,
    });
    return res.json(product);
  },

  async update(req, res) {
    const { id } = req.params;
    const {
      name, price, description,
    } = req.body;
    const product = await Product.update(
      {
        name,
        price,
        description,
      },
      { where: { id } },
    );

    if (!product) {
      return res.json({ message: 'Produto Não Existe' });
    }

    return res.json({
      name,
      price,
      description,
    });
  },

  async destroy(req, res) {
    const { id } = req.params;
    const product = await Product.destroy({
      where: {
        id,
      },
    });

    if (!product) {
      return res.json({ message: 'Produto Não Existe' });
    }

    return res.json();
  },

};
