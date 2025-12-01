import React, { useState } from "react";

const CustomerAvatar = ({ src, alt, customerName }) => {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-red-200 bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center">
        <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-lg">
            {customerName.charAt(0)}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-red-200">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        onError={() => setImageError(true)}
      />
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: "The best Jollof rice",
      text: "The Jollof Rice with Fried Chicken was simply incredible. It arrived piping hot and tasted exactly like my grandma makes it. The portion was generous, and the chicken was perfectly crispy. I felt completely satisfied",
      customer: "Sophire Abena",
      location: "Accra",
      avatar: "/images/customer2.jpg",
    },
    {
      quote: "Simply delicious",
      text: "I placed my order during the lunch rush, and it was delivered to my office in under 35 minutes. The tracking was easy to follow, and the packaging was excellent. Perfect when you need fast, high-quality food.",
      customer: "Kwame Obeng",
      location: "Accra, Central",
      avatar: "/images/customer1.jpg",
    },
    {
      quote: "One of a kind restaurant",
      text: "We ordered the Assorted Jollof Fried Rice for our anniversary dinner at home. Everything was packed beautifully and made our night special. We didn't have to cook, and the food was superb. One of a kind experience",
      customer: "Akua Gyemah",
      location: "East Legon",
      avatar: "/images/customer3.jpg",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-center space-y-6">
                {/* Quote */}
                <div className="text-red-600 text-2xl font-bold">
                  "{testimonial.quote}"
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-600 leading-relaxed">
                  {testimonial.text}
                </p>

                {/* Customer Info */}
                <div className="flex items-center justify-center space-x-4">
                  <CustomerAvatar
                    src={testimonial.avatar}
                    alt={testimonial.customer}
                    customerName={testimonial.customer}
                  />
                  <div className="text-left">
                    <h4 className="font-bold text-gray-800">
                      {testimonial.customer}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
