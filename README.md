🛍️ Modern E-Commerce Platform

A full-featured eCommerce web application built with **Next.js**, **WooCommerce REST API**, and **Redux Toolkit**, designed for performance, scalability, and SEO.

---

## 🚀 Project Overview

This project is part of a client requirement to build a modern shopping experience that integrates **WooCommerce as a backend** while leveraging **Next.js** for fast, server-rendered frontend pages.

The application focuses on user experience, dynamic product rendering, and efficient API communication.

---

## 📋 Project Requirements

### 🧩 Functional Requirements

- Display products using WooCommerce REST API
- Implement category-based product filtering
- Enable search functionality
- Add to cart, update quantity, and remove products
- Checkout flow connected to WooCommerce
- SEO-optimized dynamic pages
- Responsive design (mobile-first)

### ⚙️ Technical Requirements

- **Framework:** Next.js 14
- **State Management:** Redux Toolkit
- **Backend:** WooCommerce REST API (v3)
- **Styling:** Tailwind CSS
- **Authentication:** JWT (if needed)
- **Deployment:** Vercel / Hostinger

---

## 🧠 Features

- Product listing with pagination and filters
- Detailed product view with gallery
- Shopping cart management (add/remove/update)
- Checkout and order summary
- Server-side rendering (SSR) for SEO
- Reusable UI components
- Clean folder structure

---

## 🏗️ Project Structure

/src
├── app/ # Next.js app directory
├── components/ # Reusable UI components
├── redux/ # Redux slices and store
├── services/ # API integration (WooCommerce)
├── styles/ # Global & module-based styles
├── utils/ # Helper functions
└── public/ # Static assets (images, icons)

yaml
Copy code

---

## ⚙️ Installation & Setup

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- WooCommerce API credentials

### Steps

```bash
# Clone the repository
git clone https://github.com/TRISHAN00/nextjs-woocommerce.git

# Navigate to the project folder
cd nextjs-woocommerce

# Install dependencies
npm install

# Copy the example environment variables
cp .env.example .env.local

# Start the development server
npm run dev
🔐 Environment Variables
Create a .env.local file in the project root and add:

env
Copy code
NEXT_PUBLIC_WOOCOMMERCE_CONSUMER_KEY=your_key
NEXT_PUBLIC_WOOCOMMERCE_CONSUMER_SECRET=your_secret
NEXT_PUBLIC_API_URL=https://example.com/wp-json/wc/v3
🧪 Scripts
Command	Description
npm run dev	Run development server
npm run build	Create production build
npm run start	Start production server
npm run lint	Run ESLint checks

📸 Screenshots
Homepage	Product Page	Cart

Add screenshots in the screenshots/ folder for better presentation.

🧰 Technologies Used
Next.js 14 – React framework for SSR/SSG

Redux Toolkit – State management

WooCommerce REST API – Backend eCommerce data

Tailwind CSS – Styling

Axios / Fetch – API communication

Vercel – Deployment

🔗 API Reference
WooCommerce REST API documentation:
👉 https://woocommerce.github.io/woocommerce-rest-api-docs/

👨‍💻 Author
Trishan Saha
🌐 Portfolio
💼 LinkedIn
🐙 GitHub
📧 trishansaha43@gmail.com

📜 License
This project is licensed under the MIT License – see the LICENSE file for details.
```
