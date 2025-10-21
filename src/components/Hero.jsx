import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section id="home" className="relative bg-white pt-32 pb-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left content */}
          <div className="md:w-1/2 space-y-8 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Every Meal <br />
              <span className="text-red-600">Feels Like Home</span>
            </h1>
            <p className="text-gray-600 text-lg md:text-xl max-w-lg">
              Enjoy delectable cuisine and unforgettable moments, brought fresh
              from our kitchen to your table.
            </p>

            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <button
                onClick={() => navigate("/menu")}
                className="border-2 border-gray-800 text-gray-800 px-8 py-4 rounded-full hover:bg-red-600 transition-all duration-300 hover:text-white font-medium text-lg"
              >
                Explore Menu
              </button>
            </div>
          </div>

          {/* Right image grid */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              {/* Main food image */}
              <div className="relative">
                <div className="w-160 h-96 rounded-3xl shadow-2xl overflow-hidden">
                  <img
                    src="/images/food/hero.jpg"
                    alt="Delicious Masad Foods"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-300 rounded-full opacity-20"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-300 rounded-full opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
