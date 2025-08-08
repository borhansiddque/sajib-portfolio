import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Amazon Product Listing",
    description:
      "Create optimized Amazon listings with keyword-rich titles, bullet points, descriptions, and backend keywords. Improve ranking and conversions.",
    icon: "🛒",
  },
  {
    title: "eBay Store Management",
    description:
      "Manage eBay listings, promotions, order tracking, and customer messages. Maintain seller health and improve store performance.",
    icon: "📦",
  },
  {
    title: "Shopify Store Setup",
    description:
      "Build and customize a complete Shopify store including theme setup, product uploads, payment gateway configuration, and essential apps.",
    icon: "🛍️",
  },
  {
    title: "Etsy Listing Optimization",
    description:
      "Create and optimize Etsy listings with compelling titles, tags, and descriptions that attract buyers in handmade & vintage categories.",
    icon: "🎨",
  },
  {
    title: "Keyword Research",
    description:
      "Find high-converting keywords for Amazon, eBay, and Etsy using industry-standard tools to boost visibility and search performance.",
    icon: "🔍",
  },
  {
    title: "Store Maintenance",
    description:
      "Ongoing support including bulk uploads, updates, competitor tracking, analytics review, and regular performance reporting.",
    icon: "🛠️",
  },
];

const Services = () => {
  return (
    <div className="max-w-6xl mx-auto py-10 px-5">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-green-700 mb-3">My Services</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          I offer a range of e-commerce services to help sellers grow and scale their online stores. Whether you're just starting or want to improve existing listings—I’ve got you covered.
        </p>
      </div>

      {/* Service Cards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg border border-gray-100 transition"
          >
            <div className="text-4xl mb-3">{service.icon}</div>
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-14 bg-green-100 border-l-4 border-green-500 p-6 rounded-lg text-center">
        <h4 className="text-xl font-semibold mb-2 text-green-800">
          Need a Custom Solution?
        </h4>
        <p className="text-gray-700 mb-4">
          If you have a unique project in mind, feel free to reach out for a custom quote.
        </p>
        <Link
          to={"/contact"}
          className="inline-block bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
        >
          📩 Contact Me
        </Link>
      </div>
    </div>
  );
};

export default Services;
