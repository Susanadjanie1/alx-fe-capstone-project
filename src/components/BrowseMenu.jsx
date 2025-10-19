import React from "react";
import { Utensils, Coffee, Droplets, Cake } from "lucide-react";

const BrowseMenu = () => {
  const menuCategories = [
    {
      icon: <Utensils className="w-12 h-12 text-gray-600" />,
      title: "Combos",
      description:
        "Quick, complete, and satisfying meals. Flavorful rice, crispy fries, or noodles perfectly paired with your choice of protein.",
      link: "#combos",
    },
    {
      icon: <Utensils className="w-12 h-12 text-gray-600" />,
      title: "Main Dishes",
      description:
        "Experience the true taste of home. Authentic, comforting classics from traditional Jollof and Fufu dishes.",
      link: "#main-dishes",
    },
    {
      icon: <Droplets className="w-12 h-12 text-gray-600" />,
      title: "Juices",
      description:
        "Freshly squeezed and blended daily using real fruits like pineapple, watermelon, orange and mint-lime.",
      link: "#juices",
    },
    {
      icon: <Cake className="w-12 h-12 text-gray-600" />,
      title: "Snacks",
      description:
        "Perfect bites for any time. Indulge in our famous Chicken Shawarma or savory spring rolls and minced meat samosas.",
      link: "#snacks",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Browse Our Menu
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-center space-y-6">
                {/* Icon */}
                <div className="flex justify-center">{category.icon}</div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800">
                  {category.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {category.description}
                </p>

                {/* Link */}
                <a
                  href={category.link}
                  className="inline-block text-red-600 font-medium hover:text-red-700 transition-colors"
                >
                  Explore Menu
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseMenu;
