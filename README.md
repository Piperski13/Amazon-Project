# Amazon Project

This project simulates an Amazon-like e-commerce experience using HTML, CSS, JavaScript, Node.js, Express, and Jasmine for testing.

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

## Description

The Amazon Project is a web application designed to mimic the basic functionalities of an e-commerce website. This project includes the following features:

- **Product Listing Page:** When the `amazon.html` page loads (available at `http://localhost:3000/`), it fetches product data from `products.js` on the server and displays it.
- **Checkout Page:** Available at `http://localhost:3000/checkout`. Items added to the cart on the product listing page are stored locally. When an order is placed, a POST request is sent to the server with the cart data.
- **Orders Page:** Accessible at `http://localhost:3000/orders`. This page displays the responses from the POST requests made during order placements, allowing users to track their orders.

## Installation

To set up and run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/username/amazon-project.git
2. **Navigate to the project directory:**
   `cd amazon-project`
3. **Install the dependencies:**
   `npm install`
4. **Start the Node.js server:**
   `node server.js`
**The application will be running at http://localhost:3000.**

## Usage

### Product Listing Page
Load the `amazon.html` page at [http://localhost:3000/](http://localhost:3000/) to view the product listings. The products are fetched from the server's `products.js` file.

### Checkout Page
Visit [http://localhost:3000/checkout](http://localhost:3000/checkout) to access the checkout page. Items added to the cart from the product listing page are saved locally. Placing an order sends a POST request to the server with the cart data.

### Orders Page
Go to [http://localhost:3000/orders](http://localhost:3000/orders) to see a list of orders. This page displays the responses from the POST requests made during order placement, helping users track their orders.

## API Endpoints

### GET /products
Fetch all products from the server.

### POST /checkout
Send cart data to the server when placing an order.

### GET /orders
Retrieve all orders from the server.

