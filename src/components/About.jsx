import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Users,
  Calendar,
  Award,
  Heart,
} from "lucide-react";

const About = () => {
  const stats = [
    { number: "3", label: "Locations" },
    { number: "1995", label: "Founded" },
    { number: "65+", label: "Staff Members" },
    { number: "100%", label: "Satisfied Customers" },
  ];

  const features = [
    {
      icon: <Users className="w-8 h-8 text-red-600" />,
      title: "Multi Cuisine",
      description:
        "In the new era of technology we look in the future with certainty life.",
    },
    {
      icon: <Phone className="w-8 h-8 text-red-600" />,
      title: "Easy To Order",
      description:
        "In the new era of technology we look in the future with certainty life.",
    },
    {
      icon: <Award className="w-8 h-8 text-red-600" />,
      title: "Fast Delivery",
      description:
        "In the new era of technology we look in the future with certainty life.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Main About Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text and Stats */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  A little information for our valuable guest
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  At Masad Foods, we believe that dining is not just about food,
                  but also about the overall experience. Our staff, renowned for
                  their warmth and dedication, strives to make every visit an
                  unforgettable event.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-6 bg-gray-50 rounded-lg"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="relative">
                <img
                  src="https://picsum.photos/600/500?random=601"
                  alt="Fresh ingredients preparation"
                  className="w-full h-96 md:h-[500px] object-cover rounded-2xl shadow-lg"
                  onError={(e) => {
                    e.target.src = "/images/placeholder-food.jpg";
                  }}
                />

                {/* Overlay Contact Card */}
                <div className="absolute bottom-6 left-6 bg-gray-800 text-white p-6 rounded-lg shadow-xl max-w-sm">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Heart className="w-5 h-5 mr-2 text-red-400" />
                    Come and visit us
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 mr-3 text-red-400" />
                      <span className="text-sm">(233)55-1213-507</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 mr-3 text-red-400" />
                      <span className="text-sm">yummy@masadfoods.com</span>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="w-4 h-4 mr-3 text-red-400 flex-shrink-0 mt-1" />
                      <span className="text-sm">
                        157 Okpoti Street, Accra- Ghana
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div className="relative">
              <img
                src="https://picsum.photos/600/400?random=602"
                alt="Delicious food on a plate"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
                onError={(e) => {
                  e.target.src = "/images/placeholder-food.jpg";
                }}
              />
            </div>

            {/* Right Column - Text */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                We provide healthy food for your family.
              </h2>

              <div className="space-y-4">
                <p className="text-gray-600 text-lg leading-relaxed">
                  Our story began with a vision to create a unique dining
                  experience that merges fine dining, exceptional service, and a
                  vibrant ambiance. Rooted in Ghana's rich culinary culture, we
                  aim to honor our local roots while infusing a global palate.
                </p>

                <p className="text-gray-600 text-lg leading-relaxed">
                  At Masad Foods, we believe that dining is not just about food,
                  but also about the overall experience. Our staff, renowned for
                  their warmth and dedication, strives to make every visit an
                  unforgettable event.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition-colors font-medium">
                  Order Now
                </button>
                <button className="border-2 border-gray-800 text-gray-800 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors font-medium">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Our Values</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-red-100 rounded-full mx-auto flex items-center justify-center">
                <Heart className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">
                Authentic Taste
              </h3>
              <p className="text-gray-600">
                We preserve traditional recipes while embracing modern cooking
                techniques to deliver authentic flavors.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 bg-red-100 rounded-full mx-auto flex items-center justify-center">
                <Award className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">
                Quality Service
              </h3>
              <p className="text-gray-600">
                Our dedicated team ensures every customer receives exceptional
                service and memorable dining experiences.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 bg-red-100 rounded-full mx-auto flex items-center justify-center">
                <Users className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">
                Community Focus
              </h3>
              <p className="text-gray-600">
                We're committed to supporting our local community and sourcing
                fresh ingredients from local suppliers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
