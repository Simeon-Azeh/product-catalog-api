const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Swagger configuration
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Product Catalog API',
      version: '1.0.0',
      description: 'API for managing products, categories, inventory, and search for an e-commerce platform.',
    },
    servers: [
      {
        url: 'http://localhost:5000',
        description: 'Development server',
      },
    ],
  },
  // Path to the API docs
  apis: ['./routes/*.js'], // Swagger will scan all route files for comments
};

const specs = swaggerJsDoc(options);

module.exports = {
  swaggerUi,
  specs,
};
