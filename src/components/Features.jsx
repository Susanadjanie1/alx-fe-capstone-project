import React from "react";
import { Clock, Award, ShoppingCart } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Clock className="w-8 h-8 text-red-600" />,
      title: "Guaranteed Delivery within 45 Minutes",
      description: "Fast and reliable delivery service",
    },
    {
      icon: <Award className="w-8 h-8 text-red-600" />,
      title: "Authentic, High-Quality Ingredients",
      description: "Fresh ingredients sourced locally",
    },
    {
      icon: <ShoppingCart className="w-8 h-8 text-red-600" />,
      title: "Seamless Online Ordering & Tracking",
      description: "Easy ordering with real-time tracking",
    },
  ];

  return (
    <section className="mt-20">
      {/* Features Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Why Choose Masad Foods?
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          We're committed to delivering exceptional dining experiences with
          every order
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="text-center space-y-4">
            <div className="w-16 h-16 bg-red-100 rounded-full mx-auto flex items-center justify-center">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
