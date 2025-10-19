import React, { useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import BrowseMenu from "./BrowseMenu";
import CustomerFavorites from "./CustomerFavorites";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import MenuPage from "./MenuPage";
import CheckoutPage from "./CheckoutPage";
import About from "./About";
import AdminPanel from "./AdminPanel";
import "../styles/global.css";

const Home = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "about":
        return <About />;
      case "menu":
        return <MenuPage />;
      case "checkout":
        return <CheckoutPage />;
      case "admin":
        return <AdminPanel />;
      default:
        return (
          <>
            <Hero />
            <BrowseMenu />
            <CustomerFavorites />
            <Testimonials />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer />
    </div>
  );
};

export default Home;
