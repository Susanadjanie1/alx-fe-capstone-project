import React from "react";

const Hero = () => {
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
              <button className="bg-red-600 text-white px-8 py-4 rounded-full hover:bg-red-700 transition-all duration-300 transform hover:scale-105 font-medium text-lg">
                Order Now
              </button>
              <button className="border-2 border-gray-800 text-gray-800 px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 font-medium text-lg">
                Explore Menu
              </button>
            </div>
          </div>

          {/* Right image grid */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              {/* Main food image */}
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-orange-100 to-red-100 rounded-3xl shadow-2xl overflow-hidden">
                  {/* Placeholder for food image - you can replace with actual images */}
                  <div className="w-full h-full bg-gradient-to-br from-orange-200 to-red-200 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <svg
                          className="w-12 h-12 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                        </svg>
                      </div>
                      <p className="text-gray-600 font-medium">
                        Fresh Ingredients
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-300 rounded-full opacity-20"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-300 rounded-full opacity-20"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Features section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-red-100 rounded-full mx-auto flex items-center justify-center">
              <svg
                className="w-8 h-8 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              Guaranteed Delivery within 45 Minutes
            </h3>
            <p className="text-gray-600">Fast and reliable delivery service</p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-red-100 rounded-full mx-auto flex items-center justify-center">
              <svg
                className="w-8 h-8 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 21v-5a2 2 0 012-2h4a2 2 0 012 2v5"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              Authentic, High-Quality Ingredients
            </h3>
            <p className="text-gray-600">Fresh ingredients sourced locally</p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-red-100 rounded-full mx-auto flex items-center justify-center">
              <svg
                className="w-8 h-8 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              Seamless Online Ordering & Tracking
            </h3>
            <p className="text-gray-600">
              Easy ordering with real-time tracking
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
