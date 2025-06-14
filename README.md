
# 🛒 E-Commerce Frontend UI (React)

This is a complete **frontend UI** for an E-Commerce web application. Built using **React**, **Bootstrap**, and **React Router DOM**, this project is ready to connect with backend APIs provided by a separate backend team.

---

## 📁 Pages Included

- ✅ Home Page
- ✅ Products Listing Page
- ✅ Product Detail Page
- ✅ Cart Page (Add, Remove, Update, Clear)
- ✅ Login Page
- ✅ Register Page
- ✅ Search Products Page

---

## 🔀 Routing Setup

The project uses `react-router-dom` for navigation. Below are the route paths:

| Route Path        | Component/Page         |
|------------------|------------------------|
| `/`              | Home Page              |
| `/products`      | Products Listing       |
| `/products/:id`  | Product Detail         |
| `/cart`          | Cart                   |
| `/login`         | Login                  |
| `/register`      | Register               |
| `/search`        | Search Products        |

---

## 🔌 Backend API Integration Plan

Although APIs are not connected yet, the frontend is structured for backend integration. API routes expected from the backend team:

- `GET /api/products`
- `GET /api/products/:id`
- `POST /api/cart`
- `PUT /api/cart/update`
- `DELETE /api/cart/remove`
- `POST /api/login`
- `POST /api/register`

---

## 💡 Features

- 🔹 Fully responsive UI (Bootstrap + custom CSS)
- 🔹 Product listing and detail view
- 🔹 Add to cart / remove from cart / update cart quantity
- 🔹 Login and registration forms
- 🔹 Search functionality
- 🔹 React context used for cart logi
