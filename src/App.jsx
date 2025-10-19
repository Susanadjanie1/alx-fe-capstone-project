import React from "react";
import { CartProvider } from "./components/context/CartContext";
import Home from "./components/Home";

function App() {
  return (
    <CartProvider>
      <Home />
    </CartProvider>
  );
}

export default App;
