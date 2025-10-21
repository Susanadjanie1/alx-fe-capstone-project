import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./components/context/CartContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BrowseMenu from "./components/BrowseMenu";
import CustomerFavorites from "./components/CustomerFavorites";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import MenuPage from "./components/MenuPage";
import CheckoutPage from "./components/CheckoutPage";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppWidget from "./components/WhatsAppWidget";
import "./App.css";
function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen">
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <BrowseMenu />
                  <CustomerFavorites />
                  <Features />
                  <Testimonials />
                </>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
          <Footer />
          <WhatsAppWidget />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
