import React from "react";
import { CartProvider } from "./context/CartContext";
import Home from "./pages/Home";
import "./styles/global.css";

function App() {
  return (
    <CartProvider>
      <Home />
    </CartProvider>
  );
}

export default App;
