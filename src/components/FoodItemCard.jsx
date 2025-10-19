import React from "react";
import { useCart } from "./context/CartContext";
import SmartImage from "./SmartImage";

const FoodItemCard = ({ item }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    // Transform item to match cart structure
    const cartItem = {
      id: item.item_id,
      name: item.name,
      price: item.price,
      description: item.description,
      image: item.image,
      category: item.category_name || "Menu Item",
    };

    addToCart(cartItem);
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative">
        <SmartImage
          itemId={item.item_id}
          alt={item.name}
          className="w-full h-48 object-cover"
        />
        {item.is_featured && (
          <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-medium">
            Featured
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {item.name}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {item.description}
        </p>

        <div className="flex justify-between items-center">
          <span className="font-bold text-red-600 text-lg">
            GHS {item.price.toFixed(2)}
          </span>
          <button
            onClick={handleAddToCart}
            className="bg-red-600 text-white px-4 py-2 rounded-full text-sm hover:bg-red-700 transition-colors font-medium"
          >
            Add to Cart
          </button>
        </div>

        {item.options && (
          <div className="mt-2 text-xs text-gray-500">
            Customizable options available
          </div>
        )}
      </div>
    </div>
  );
};

export default FoodItemCard;
