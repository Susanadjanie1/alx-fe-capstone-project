import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import BrowseMenu from "./BrowseMenu";
import CustomerFavorites from "./CustomerFavorites";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import MenuPage from "./MenuPage";
import CheckoutPage from "./CheckoutPage";
import "../styles/global.css";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <BrowseMenu />
      <CustomerFavorites />
      <Testimonials />
      <Footer />
      {/* Hidden sections for now - can be accessed via navigation */}
      <div className="hidden">
        <MenuPage />
        <CheckoutPage />
      </div>
    </div>
  );
};

export default Home;
