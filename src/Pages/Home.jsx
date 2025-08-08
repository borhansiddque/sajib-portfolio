import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const skills = [
    "E-commerce Management",
    "Product Listing Optimization",
    "Amazon Seller Central",
    "eBay Store Management",
    "Shopify Store Management",
    "Etsy Store Management",
    "Online Store Growth",
    "Sales Strategy",
    "Keyword Research",
    "Product Image Optimization",
    "E-commerce SEO",
  ];

  return (
    <div className="max-w-6xl mx-auto px-5 py-10">
      {/* Profile Header */}
      <section className="text-center mt-10">
        <img
          src="https://img.3s-soft.com/uploads/oahidul-islam-sajib.jpg"
          alt="Oahidul Islam Sajib"
          className="w-40 h-40 rounded-full mx-auto ring-4 ring-green-400 shadow-xl shadow-green-200 object-cover"
        />
        <h2 className="text-3xl font-bold mt-4 text-gray-800">
          Oahidul Islam Sajib
        </h2>
        <p className="text-green-600 text-sm font-medium">
          E-commerce Store Manager
        </p>
        <p className="text-gray-600 text-sm">Chattogram, Bangladesh</p>

        {/* Hire Me Button */}
        <div className="mt-5">
          <Link to="/contact">
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full font-semibold shadow-md transition duration-300 cursor-pointer">
              Hire Me
            </button>
          </Link>
        </div>
      </section>

      {/* Bio / Intro */}
      <section className="mt-10 text-center sm:text-left">
        <p className="text-gray-700 text-lg leading-relaxed">
          With over <strong>7 years of experience</strong> as an E-commerce Store Manager, I
          specialize in optimizing product listings across platforms like{" "}
          <strong>Amazon</strong>, <strong>eBay</strong>, <strong>Shopify</strong>, and{" "}
          <strong>Etsy</strong>. I have successfully managed and grown online stores on{" "}
          <strong>Fiverr</strong> and <strong>Upwork</strong>, helping brands scale their digital
          presence. My approach combines <strong>strategic planning</strong>,{" "}
          <strong>store optimization</strong>, and <strong>sales-focused execution</strong> to
          maximize revenue.
        </p>
      </section>

      {/* Skills */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-green-700 mb-4 text-center">
          Skills & Expertise
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, i) => (
            <span
              key={i}
              className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium shadow hover:bg-green-200 transition duration-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
