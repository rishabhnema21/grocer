# Grocero – A Full‑Stack Grocery Delivery Website

Grocero is a complete grocery delivery web application that I built to understand real-world full‑stack development, from designing the UI to managing backend logic, authentication, payments, and order flow. I wanted to create something practical that touches almost every core concept a modern web app needs: user accounts, product management, cart logic, checkout flow, online payments, and a clean user dashboard.

This project reflects my hands-on learning experience with the MERN stack and how I implemented real-world functionality like payment integration, address management, and order tracking.

---

## What This Project Is

Grocero is a simple but fully functional grocery delivery platform where users can:

- Browse and view grocery products  
- Add products to the cart  
- Manage quantities  
- Save and manage delivery addresses  
- Choose between Cash on Delivery and Online Payment  
- Pay via Razorpay (Test Mode)  
- Place orders and view them in their dashboard  

---

## How the Application Works (End‑to‑End)

### 1. User Flow
- A user signs up or logs in.
- They browse products rendered from the backend.
- They add items to the cart; quantities update dynamically.
- Before ordering, they must select or add a delivery address.
- At checkout, they can choose:
  - Cash on Delivery  
  - Online Payment via Razorpay (Test Mode)  

### 2. Online Payment Flow
- Frontend requests a Razorpay order from the backend.
- Backend creates a Razorpay order using the SDK.
- Razorpay popup opens on frontend.
- Only after successful verification, the order is saved in the database.

### 3. Order System
- Orders contain: items, quantities, prices, user, payment type, address, and timestamp.
- The user can view all their orders on the “My Orders” page.

---

## Tech Stack

### **Frontend**
- React
- Tailwind CSS, Material UI
- React Router  
- Context API for state management
- Axios for API communication  

### **Backend**
- Node.js  
- Express.js  
- MongoDB + Mongoose  
- JWT Authentication  
- Razorpay Payment Gateway (Test Mode)
- Cloudinary CDN
- Multer  

---

## Major Features

### ✔ Product Listing  
- Fetched from the backend with offer prices, real‑time cart compatibility, and quantity management.
- Category wise display of items.
- Search individual items.

### ✔ Cart System  
- Add/remove items  
- Increment/decrement quantities  
- Auto-calculated totals  
- 2% platform fee included  

### ✔ Address Management  
Users can add multiple delivery addresses and choose one during checkout.

### ✔ Razorpay Payment Integration (Test Mode)  
- Client creates an order request  
- Backend talks to Razorpay  
- Payment popup opens  
- HMAC verification done securely on backend  
- Order stored only after signature verification  

### ✔ Orders Dashboard  
Users can view all previous orders including payment type and amount.

---

## Setting Up Locally

### **1. Clone the project**
```
git clone <repo-url>
cd grocero
```

### **2. Install dependencies**
Frontend:
```
cd client
npm install
```

Backend:
```
cd server
npm install
```

### **3. Environment Variables**

#### Backend `.env`
```
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
RAZORPAY_KEY_ID=your_key_id
RAZORPAY_SECRET=your_key_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_key
CLOUDINARY_API_SECRET=your_secret
```

#### Frontend `.env`
```
REACT_APP_RAZORPAY_KEY_ID=your_key_id
```

### **4. Start the app**
Backend:
```
npm start
```

Frontend:
```
npm run dev
```

---

## Final Thoughts

Grocero started as a simple grocery UI but turned into a full end‑to‑end stack project that made me comfortable with real user flows, payments, API handling, authentication, and clean database structuring.  

This project is a strong proof of the skills I’ve built across frontend, backend, and integration work—and it represents the kind of practical applications I enjoy building.