import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import CartIcon from "./CartIcon";
import CartModal from "./CartModal";

const Navbar = () => {
  const location = useLocation();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showTopBar, setShowTopBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Check if scrolled past threshold (50px)
      setIsScrolled(currentScrollY > 50);
      
      // Hide/show top bar based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down - hide top bar
        setShowTopBar(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show top bar
        setShowTopBar(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Top Bar - Contact Information */}
      <div
        className={`fixed top-0 left-0 w-full bg-gray-800 text-white py-1.5 md:py-2 text-xs md:text-sm z-50 transition-all duration-300 ease-in-out ${
          showTopBar ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center gap-2">
          {/* Contact Info */}
          <div className="flex items-center gap-2 sm:gap-4 md:gap-6 flex-1 min-w-0">
            <div className="flex items-center gap-1 sm:gap-2">
              <Phone className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
              <a
                href="tel:+2330200128973"
                className="hover:text-red-400 transition-colors text-xs sm:text-sm whitespace-nowrap truncate"
              >
                (233) 020-012-8973
              </a>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <Mail className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
              <span className="text-xs sm:text-sm truncate">yummy@masadfoods.com</span>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-shrink-0">
            {/* X (Twitter) */}
            <a
              href="https://twitter.com/masadfoods"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-400 transition-colors"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com/masadfoods"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-400 transition-colors"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/masadfoods"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-400 transition-colors"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com/@masadfoods"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-400 transition-colors"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`fixed w-full left-0 z-40 transition-all duration-300 ease-in-out ${
          isScrolled
            ? "top-0 bg-white/95 backdrop-blur-md shadow-lg py-3"
            : "top-12 bg-white shadow-md py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img
              src="/MasadWhite.png"
              alt="Masad Foods Logo"
              className={`object-contain bg-transparent transition-all duration-300 ${
                isScrolled ? "w-10 h-10" : "w-12 h-12"
              }`}
            />
            <h1
              className={`font-bold text-gray-800 transition-all duration-300 ${
                isScrolled ? "text-xl" : "text-2xl"
              }`}
            >
              Masad Foods
            </h1>
          </Link>

          {/* Desktop Menu Links */}
          <ul className="hidden md:flex items-center gap-8 text-gray-700">
            <li>
              <Link
                to="/"
                className={`hover:text-red-600 transition-colors font-medium ${
                  location.pathname === "/" ? "text-red-600" : ""
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`hover:text-red-600 transition-colors font-medium ${
                  location.pathname === "/about" ? "text-red-600" : ""
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/menu"
                className={`hover:text-red-600 transition-colors font-medium ${
                  location.pathname === "/menu" ? "text-red-600" : ""
                }`}
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`hover:text-red-600 transition-colors font-medium ${
                  location.pathname === "/contact" ? "text-red-600" : ""
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Right Section: Cart + Order Now */}
          <div className="flex items-center gap-4">
            {/* Cart Icon */}
            <CartIcon onClick={() => setIsCartOpen(true)} />

            {/* CTA Button */}
            <Link
              to="/menu"
              className={`bg-red-600 text-white rounded-full hover:bg-red-700 transition-all duration-300 font-medium ${
                isScrolled ? "px-5 py-1.5 text-sm" : "px-6 py-2"
              }`}
            >
              Order Now
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 text-gray-700 hover:text-red-600 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className={`md:hidden border-t border-gray-200 transition-all duration-300 ${
              isScrolled
                ? "bg-white/95 backdrop-blur-md"
                : "bg-white"
            }`}
          >
            <ul className="px-6 py-4 space-y-4">
              <li>
                <Link
                  to="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-gray-700 hover:text-red-600 transition-colors font-medium ${
                    location.pathname === "/" ? "text-red-600" : ""
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-gray-700 hover:text-red-600 transition-colors font-medium ${
                    location.pathname === "/about" ? "text-red-600" : ""
                  }`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/menu"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-gray-700 hover:text-red-600 transition-colors font-medium ${
                    location.pathname === "/menu" ? "text-red-600" : ""
                  }`}
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-gray-700 hover:text-red-600 transition-colors font-medium ${
                    location.pathname === "/contact" ? "text-red-600" : ""
                  }`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Cart Modal */}
      {isCartOpen && <CartModal onClose={() => setIsCartOpen(false)} />}
    </>
  );
};

export default Navbar;
