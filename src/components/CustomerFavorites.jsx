import React from "react";
import { useCart } from "./context/CartContext";

const CustomerFavorites = () => {
  const { addToCart } = useCart();

  const favoriteItems = [
    {
      id: 1,
      name: "Jollof Rice with Fried Chicken",
      price: 45.0,
      image: "/api/placeholder/400/300",
      description:
        "Traditional Ghanaian jollof rice served with crispy fried chicken",
    },
    {
      id: 2,
      name: "Chicken Shawarma",
      price: 45.0,
      image: "/api/placeholder/400/300",
      description:
        "Fresh chicken shawarma wrapped in soft bread with vegetables",
    },
    {
      id: 3,
      name: "Banku & Okro",
      price: 45.0,
      image: "/api/placeholder/400/300",
      description: "Traditional banku served with fresh okro soup",
    },
    {
      id: 4,
      name: "Assorted Jollof Fried Rice",
      price: 45.0,
      image: "/api/placeholder/400/300",
      description:
        "Special fried rice with mixed vegetables and choice of protein",
    },
    {
      id: 5,
      name: "Fufu & Goat Light Soup",
      price: 45.0,
      image: "/api/placeholder/400/300",
      description: "Traditional fufu with goat meat in light soup",
    },
  ];

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
          <div className="md:col-span-2 lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative">
                <div className="w-full h-64 bg-gradient-to-br from-orange-200 to-red-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg
                        className="w-10 h-10 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                      </svg>
                    </div>
                    <p className="text-gray-600 font-medium">Featured Dish</p>
                  </div>
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
                    onClick={() => addToCart(favoriteItems[0])}
                    className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors font-medium"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Grid of other items */}
          <div className="md:col-span-2 lg:col-span-2 grid md:grid-cols-2 gap-6">
            {favoriteItems.slice(1).map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative">
                  <div className="w-full h-48 bg-gradient-to-br from-orange-200 to-red-200 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-red-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                        <svg
                          className="w-8 h-8 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                        </svg>
                      </div>
                      <p className="text-gray-600 font-medium text-sm">
                        Fresh Food
                      </p>
                    </div>
                  </div>
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
                      onClick={() => addToCart(item)}
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
