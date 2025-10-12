import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-gray-50 pt-24 pb-16 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between"
    >
      {/* Left content */}
      <div className="md:w-1/2 space-y-6 text-center md:text-left">
        <h1 className="text-5xl font-bold text-gray-900 leading-tight">
          Every Meal <br /> Feels Like Home
        </h1>
        <p className="text-gray-600 text-lg">
          Enjoy delectable cuisine and unforgettable moments,
          brought fresh from our kitchen to your table.
        </p>

        <div className="flex justify-center md:justify-start gap-4">
          <button className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition">
            Order Now
          </button>
          <button className="border border-gray-800 px-6 py-3 rounded-full hover:bg-gray-100 transition">
            Explore Menu
          </button>
        </div>
      </div>

      {/* Right image */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img
          src="/images/hero-bg.jpg"
          alt="Masad Foods dishes"
          className="rounded-3xl shadow-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
