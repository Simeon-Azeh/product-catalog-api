const mongoose = require('mongoose');
require('dotenv').config();
const { faker } = require('@faker-js/faker');
const Product = require('../models/Product');
const Category = require('../models/Category');

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ MongoDB connected');

    // Clear old data
    await Product.deleteMany();
    await Category.deleteMany();

    // Create fake categories
    const categoryNames = ['Electronics', 'Clothing', 'Books', 'Toys', 'Accessories'];
    const categories = await Category.insertMany(
      categoryNames.map(name => ({ name }))
    );

    console.log('📁 Categories seeded');

    // Create fake products
    const products = [];

    for (let i = 0; i < 10; i++) {
      const randomCategory = faker.helpers.arrayElement(categories);
      const variants = Array.from({ length: 2 }).map(() => ({
        size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
        color: faker.color.human(),
        price: faker.commerce.price({ min: 10, max: 300, dec: 0 }),
        stock: faker.number.int({ min: 1, max: 10 }),
      }));

      products.push({
        name: faker.commerce.productName(),
        category: randomCategory._id,
        description: faker.commerce.productDescription(),
        price: faker.commerce.price({ min: 20, max: 500, dec: 0 }),
        discount: faker.number.int({ min: 0, max: 30 }),
        stock: faker.number.int({ min: 0, max: 15 }),
        variants,
      });
    }

    await Product.insertMany(products);
    console.log('📦 Products seeded');

    process.exit();
  } catch (error) {
    console.error('❌ Seeding error:', error);
    process.exit(1);
  }
};

seed();
