const Product = require('../models/Product');

// Create
exports.createProduct = async (req, res, next) => {
  try {
    const product = new Product(req.body);
    const saved = await product.save();
    res.status(201).json(saved);
  } catch (err) {
    next(err);
  }
};

// Read All
exports.getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find().populate('category');
    res.json(products);
  } catch (err) {
    next(err);
  }
};

// Search + Filter
exports.searchProducts = async (req, res, next) => {
  try {
    const { name, category, date } = req.query;
    const query = {};

    if (name) query.name = { $regex: name, $options: 'i' };
    if (category) query.category = category;
    if (date) query.createdAt = { $gte: new Date(date) };

    const results = await Product.find(query).populate('category');
    res.json(results);
  } catch (err) {
    next(err);
  }
};

// Get One
exports.getProductById = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id).populate('category');
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.json(product);
  } catch (err) {
    next(err);
  }
};

// Update
exports.updateProduct = async (req, res, next) => {
  try {
    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: 'Product not found' });
    res.json(updated);
  } catch (err) {
    next(err);
  }
};

// Delete
exports.deleteProduct = async (req, res, next) => {
  try {
    const deleted = await Product.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Product not found' });
    res.json({ message: 'Product deleted' });
  } catch (err) {
    next(err);
  }
};

// Report: Low stock
exports.getLowStockProducts = async (req, res, next) => {
  try {
    const lowStock = await Product.find({ stock: { $lt: 5 } });
    res.json(lowStock);
  } catch (err) {
    next(err);
  }
};
