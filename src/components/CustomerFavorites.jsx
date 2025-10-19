import React, { useEffect, useState } from "react";
import { useCart } from "./context/CartContext";
import menuService from "../services/menuService";
import SmartImage from "./SmartImage";

const CustomerFavorites = () => {
  const { addToCart } = useCart();
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFeaturedItems = async () => {
      try {
        const menuData = await menuService.fetchMenu();
        const featuredItems = menuService.getFeaturedItems(menuData);
        setFavoriteItems(featuredItems.slice(0, 5)); // Take first 5 featured items
      } catch (error) {
        console.error("Error loading featured items:", error);
        // Fallback to static data if API fails
        setFavoriteItems([
          {
            item_id: "I0102",
            name: "Jollof Rice with Fried Chicken",
            price: 45.0,
            description:
              "Traditional Ghanaian jollof rice served with crispy fried chicken",
            is_featured: true,
            image: "/images/placeholder-food.jpg",
          },
          {
            item_id: "I0301",
            name: "Chicken Shawarma",
            price: 30.0,
            description:
              "Fresh chicken shawarma wrapped in soft bread with vegetables",
            is_featured: true,
            image: "/images/placeholder-food.jpg",
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    loadFeaturedItems();
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-red-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading favorites...</p>
          </div>
        </div>
      </section>
    );
  }

  const handleAddToCart = (item) => {
    const cartItem = {
      id: item.item_id,
      name: item.name,
      price: item.price,
      description: item.description,
      image: item.image,
      category: item.category_name || "Customer Favorite",
    };
    addToCart(cartItem);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Customer Favorites
          </h2>
          <button className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition-colors font-medium">
            Order Now
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Large featured item */}
          {favoriteItems.length > 0 && (
            <div className="md:col-span-2 lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <SmartImage
                    itemId={favoriteItems[0].item_id}
                    alt={favoriteItems[0].name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                    Featured
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {favoriteItems[0].name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {favoriteItems[0].description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-red-600">
                      GHS {favoriteItems[0].price.toFixed(2)}
                    </span>
                    <button
                      onClick={() => handleAddToCart(favoriteItems[0])}
                      className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors font-medium"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Grid of other items */}
          <div className="md:col-span-2 lg:col-span-2 grid md:grid-cols-2 gap-6">
            {favoriteItems.slice(1).map((item) => (
              <div
                key={item.item_id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
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
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {item.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-red-600">
                      GHS {item.price.toFixed(2)}
                    </span>
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition-colors font-medium text-sm"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerFavorites;
