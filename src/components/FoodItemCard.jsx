import React from "react";
import { useCart } from "./context/CartContext";

const FoodItemCard = ({ item }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <p className="text-gray-500 text-sm mb-2">{item.description}</p>
        <div className="flex justify-between items-center">
          <span className="font-semibold text-red-600">GHS {item.price}</span>
          <button
            onClick={() => addToCart(item)}
            className="bg-red-600 text-white px-3 py-1 rounded-full text-sm hover:bg-red-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodItemCard;
