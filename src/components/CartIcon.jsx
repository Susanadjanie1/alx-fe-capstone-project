import React from "react";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

const CartIcon = ({ onClick }) => {
  const { items } = useCart();
  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="relative cursor-pointer" onClick={onClick}>
      <ShoppingCart className="w-6 h-6 text-gray-700" />
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full px-2">
          {itemCount}
        </span>
      )}
    </div>
  );
};

export default CartIcon;
