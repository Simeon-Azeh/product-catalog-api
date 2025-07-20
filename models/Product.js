const mongoose = require('mongoose');

// Variant subdocument schema
const variantSchema = new mongoose.Schema({
  size: {
    type: String,
    default: 'One Size',
  },
  color: {
    type: String,
    default: 'Default',
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  stock: {
    type: Number,
    required: true,
    min: 0,
  }
});

// Main product schema
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  description: {
    type: String,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  discount: {
    type: Number,
    min: 0,
    max: 100,
    default: 0,
  },
  variants: [variantSchema],
  stock: {
    type: Number,
    required: true,
    min: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
}, {
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Virtual field: final price after discount
productSchema.virtual('finalPrice').get(function () {
  return this.price - (this.price * (this.discount || 0) / 100);
});

module.exports = mongoose.model('Product', productSchema);
