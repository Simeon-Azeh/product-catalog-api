const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const errorHandler = require('./middlewares/errorHandler');
const { swaggerUi, specs } = require('./docs/swagger');

dotenv.config();
connectDB();

const app = express(); // ✅ Now app is defined

app.use(express.json());

// API routes
app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);

// Swagger docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs)); // ✅ Now this works

// Global error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
