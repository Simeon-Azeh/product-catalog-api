# Product Catalog API

A RESTful API for managing products, categories, inventory, and pricing for an e-commerce style product catalog system. Built with Node.js, Express.js, and MongoDB.

## 🚀 Features

- Full CRUD operations for **Products** and **Categories**
- **Product Variants** support (e.g., size, color)
- **Search** and **filtering** by name, category, price, and date
- **Inventory tracking** with low-stock reporting
- **Discounted pricing** support
- Input **validation** and centralized **error handling**
- Interactive **Swagger API documentation**



## 🛠️ Setup & Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Simeon-Azeh/product-catalog-api.git
   cd product-catalog-api


2. Install dependencies:

npm install

3. **Create .env file in the root directory with the following content:**

PORT=5000
MONGODB_URI=mongodb://localhost:27017/product_catalog

4. **Seed the database with dummy data:**

npm run seed

5. **Start the development server:**
npm run dev


Open Swagger UI to test the API:

http://localhost:5000/api-docs





📚 API Endpoints

## Categories

| Method | Endpoint              | Description           |
| ------ | --------------------- | --------------------- |
| GET    | `/api/categories`     | Get all categories    |
| GET    | `/api/categories/:id` | Get category by ID    |
| POST   | `/api/categories`     | Create a new category |
| PUT    | `/api/categories/:id` | Update a category     |
| DELETE | `/api/categories/:id` | Delete a category     |

## Products

| Method | Endpoint                                                   | Description                 |
| ------ | ---------------------------------------------------------- | --------------------------- |
| GET    | `/api/products`                                            | Get all products            |
| GET    | `/api/products/:id`                                        | Get product by ID           |
| POST   | `/api/products`                                            | Create a new product        |
| PUT    | `/api/products/:id`                                        | Update a product            |
| DELETE | `/api/products/:id`                                        | Delete a product            |
| GET    | `/api/products/search?name=&category=&minPrice=&maxPrice=` | Search and filter products  |
| GET    | `/api/products/report/low-stock`                           | Get products with low stock |

Testing
Use Postman, Insomnia, or REST Client to test all endpoints

Swagger UI at /api-docs provides an interactive way to test the API



## 📦 Dummy Data
Run the following to seed your database with sample products and categories:


npm run seed


This will insert basic products, categories, and variants to allow testing the full functionality.

## Tech Stack
Node.js

Express.js

MongoDB

Mongoose

Swagger (OpenAPI)

dotenv

nodemon

## Limitations

No auth implemented. Image upload not supported. Admin panel not included.


## Demo video 

https://youtu.be/JmazkNKWDDE
