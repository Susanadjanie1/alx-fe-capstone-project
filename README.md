# 🍽️ Masad Foods – Capstone Project

A responsive single-page food ordering platform built with **React.js** and **Tailwind CSS**.  
It allows users to browse a menu, add items to a cart, and simulate a checkout process.

---

##  Overview

**Project Title:** Masad Foods – Local Food Ordering Platform  
**Goal:** To create a responsive, interactive web app that mimics real-world food ordering.  
**Key Skills Demonstrated:**  
- React component architecture  
- State management (Context API + useReducer)  
- API integration  
- Responsive and modern UI design

---

##  Main Features

- **Dynamic Menu:** Displays food items from a mock API (name, price, image, description).  
- **Cart System:** Add, remove, and update quantities in a real-time cart modal.  
- **Checkout:** Choose between **Delivery** (adds delivery fee) or **Pickup** (no fee).  
- **Order Simulation:** Logs final order to console and clears cart after submission.  
- **Responsive Design:** Works seamlessly across mobile, tablet, and desktop devices.

---

## Tech Stack

| Category | Technology |
|-----------|-------------|
| Frontend | React.js (Vite setup) |
| Styling | Tailwind CSS |
| State Management | Context API + useReducer |
| APIs | Custom Mock JSON API + External Image API |
| Deployment | Vercel |
| Design | Figma |

---

##  Folder Structure
masad-foods/
│
├── public/
│ └── images/
│
├── src/
│ ├── components/
│ │ ├── Navbar.jsx
│ │ ├── Hero.jsx
│ │ ├── FoodItemCard.jsx
│ │ ├── CartModal.jsx
│ │ └── CartIcon.jsx
│ │
│ ├── context/
│ │ └── CartContext.jsx
│ │
│ ├── pages/
│ │ ├── MenuPage.jsx
│ │ └── CheckoutPage.jsx
│ │
│ ├── styles/
│ │ └── global.css
│ │
│ ├── App.jsx
│ └── main.jsx
│
└── README.md


---

## ⚙️ Setup Instructions

Follow these steps to run the project locally:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/masad-foods.git
   cd masad-foods

2. Install Dependencies
npm install

3. Run the Development Server
npm run dev

4. Build for Production
npm run build

5. Preview Production Build
npm run preview


