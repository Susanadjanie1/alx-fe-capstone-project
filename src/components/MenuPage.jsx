import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import FoodItemCard from "./FoodItemCard";
import Breadcrumb from "./Breadcrumb";
import menuService from "../services/menuService";

const MenuPage = () => {
  const location = useLocation();
  const [menuData, setMenuData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMenu = async () => {
      try {
        setLoading(true);
        const data = await menuService.fetchMenu();
        setMenuData(data);
      } catch (err) {
        console.error("Error fetching menu:", err);
        setError("Failed to load menu. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    loadMenu();
  }, []);

  // Handle scrolling to specific category based on query parameter
  useEffect(() => {
    if (menuData && location.search) {
      const urlParams = new URLSearchParams(location.search);
      const categoryParam = urlParams.get("category");

      if (categoryParam) {
        // Map category parameter to category ID
        const categoryMap = {
          "main-dishes-rice": "C01",
          "traditional-staples": "C02",
          "beverages-juices": "C05",
          snacks: "C04",
        };

        const categoryId = categoryMap[categoryParam];
        if (categoryId) {
          // Wait a bit for the DOM to be ready, then scroll to the category
          setTimeout(() => {
            const categoryElement = document.getElementById(
              `category-${categoryId}`
            );
            if (categoryElement) {
              categoryElement.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }
          }, 100);
        }
      }
    }
  }, [menuData, location.search]);

  if (loading) {
    return (
      <section id="menu" className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-red-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading menu...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="menu" className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center">
          <p className="text-red-600">{error}</p>
        </div>
      </section>
    );
  }

  if (!menuData) {
    return (
      <section id="menu" className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center">
          <p className="text-gray-600">No menu data available.</p>
        </div>
      </section>
    );
  }

  const allItems = menuService.getAllItems(menuData);

  // Generate breadcrumb items - simplified to only show Home link
  const generateBreadcrumbItems = () => {
    return [
      {
        label: "Home",
        link: "/",
      },
      {
        label: "Menu",
        link: null, // Current page, not clickable
      },
    ];
  };

  return (
    <section id="menu" className="max-w-7xl mx-auto px-6 py-16 pt-32">
      {/* Breadcrumb Navigation */}
      <Breadcrumb items={generateBreadcrumbItems()} />

      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          {menuData.menu_name}
        </h2>
        <p className="text-gray-600">Fresh ingredients, authentic flavors</p>
      </div>

      {/* Menu Categories */}
      {menuData.categories.map((category) => (
        <div
          key={category.category_id}
          id={`category-${category.category_id}`}
          className="mb-16 scroll-mt-24"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              {category.name}
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {category.description}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {category.items.map((item) => (
              <FoodItemCard key={item.item_id} item={item} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default MenuPage;
