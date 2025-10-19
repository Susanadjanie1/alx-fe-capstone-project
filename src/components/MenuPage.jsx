import React, { useEffect, useState } from "react";
import FoodItemCard from "../components/FoodItemCard";

const MenuPage = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("/menu.json") // place your mock API or file here
      .then(res => res.json())
      .then(data => setMenu(data))
      .catch(err => console.error("Error fetching menu:", err));
  }, []);

  return (
    <section id="menu" className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Menu</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {menu.map(item => (
          <FoodItemCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default MenuPage;
