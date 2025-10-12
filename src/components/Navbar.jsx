import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/images/logo.png" alt="Masad Foods Logo" className="w-8 h-8" />
          <h1 className="text-xl font-semibold text-gray-800">Masad Foods</h1>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700">
          <li><a href="#home" className="hover:text-red-600">Home</a></li>
          <li><a href="#about" className="hover:text-red-600">About</a></li>
          <li><a href="#menu" className="hover:text-red-600">Menu</a></li>
          <li><a href="#contact" className="hover:text-red-600">Contact</a></li>
        </ul>

        {/* Call-to-action */}
        <a
          href="#order"
          className="bg-red-600 text-white px-5 py-2 rounded-full hover:bg-red-700 transition"
        >
          Order Now
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
