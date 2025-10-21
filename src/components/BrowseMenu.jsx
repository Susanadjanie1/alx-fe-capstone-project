import React from "react";
import { Link } from "react-router-dom";
import { UtensilsCrossed, ChefHat, GlassWater, Sandwich } from "lucide-react";

const BrowseMenu = () => {
  const menuCategories = [
    {
      icon: <UtensilsCrossed className="w-12 h-12 text-gray-600" />,
      title: "Main Dishes",
      description:
        "Quick, complete, and satisfying meals. Flavorful rice, crispy fries, or noodles perfectly paired with your choice of protein.",
      categoryId: "C01",
      link: "/menu?category=main-dishes-rice",
    },
    {
      icon: <ChefHat className="w-12 h-12 text-gray-600" />,
      title: "Local Dishes",
      description:
        "Experience the true taste of home. Authentic, comforting classics like Fufu and Banku served with rich soups and sauces.",
      categoryId: "C02",
      link: "/menu?category=traditional-staples",
    },
    {
      icon: <GlassWater className="w-12 h-12 text-gray-600" />,
      title: "Juices",
      description:
        "Freshly squeezed and blended daily using real fruits like pineapple, watermelon, orange and mint-lime.",
      categoryId: "C05",
      link: "/menu?category=beverages-juices",
    },
    {
      icon: <Sandwich className="w-12 h-12 text-gray-600" />,
      title: "Snacks",
      description:
        "Perfect bites for any time. Indulge in our famous Chicken Shawarma or savory spring rolls and minced meat samosas.",
      categoryId: "C04",
      link: "/menu?category=snacks",
    },
  ];

  return (
    <section id="browse-menu" className="py-20 bg-gray-50">
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
                <Link
                  to={category.link}
                  className="inline-block text-red-600 font-medium hover:text-red-700 transition-colors"
                >
                  Explore Menu
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseMenu;
