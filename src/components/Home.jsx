import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import MenuPage from "../components/MenuPage";
import CheckoutPage from "../components/CheckoutPage";
import "../styles/global.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
       <MenuPage />
      <CheckoutPage />
    </div>
  );
};

export default Home;
