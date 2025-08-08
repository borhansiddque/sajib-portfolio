import React from "react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="max-w-6xl mx-auto py-10 px-5">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-green-700 mb-10 text-center">
        About Me
      </h2>

      {/* Profile & Bio */}
      <div className="flex flex-col md:flex-row gap-10 items-center">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <img
            src="https://img.3s-soft.com/uploads/oahidul-islam-sajib.jpg"
            alt="Oahidul Islam Sajib"
            className="w-48 h-48 object-cover rounded-full ring-2 ring-green-400 shadow-xl shadow-green-200"
          />
        </div>

        {/* Bio Content */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-green-600">
            Oahidul Islam Sajib
          </h3>
          <p className="text-gray-700 mt-2 mb-4">
            I am a passionate <strong>E-commerce Store Manager</strong> with
            over <strong>7 years</strong> of hands-on experience helping brands
            and individuals build, manage, and scale their online stores. Based
            in <strong>Chattogram, Bangladesh</strong>, I specialize in
            optimizing product listings for platforms like{" "}
            <strong>Amazon, eBay, Shopify</strong>, and <strong>Etsy</strong>.
          </p>
          <p className="text-gray-700 mb-4">
            My journey started as a freelancer on <strong>Fiverr</strong> and{" "}
            <strong>Upwork</strong>, where I have completed hundreds of
            successful projects and earned long-term clients. I bring a
            strategic mindset, attention to detail, and proven methods to
            enhance visibility, increase conversions, and drive revenue.
          </p>
          <p className="text-gray-700">
            I believe that a well-managed store is the foundation of e-commerce
            success. From listing products to managing back-end operations—I
            offer end-to-end solutions that deliver results.
          </p>
        </div>
      </div>

      {/* What I Do Section */}
      <div className="mt-10">
        <h3 className="text-2xl font-semibold text-green-700 mb-4">
          What I Do
        </h3>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>
            Optimize product listings for SEO, visibility & conversion on
            Amazon, eBay, Shopify & Etsy
          </li>
          <li>
            Manage seller central accounts and ensure store health is maintained
          </li>
          <li>Provide ongoing store maintenance and performance reports</li>
          <li>
            Help clients grow their revenue through smart sales and listing
            strategies
          </li>
        </ul>
      </div>

      {/* Stats Section */}
      <section className="my-20 text-center">
        <h2 className="text-2xl text-green-700 font-bold mb-10">
          🚀 Track Record
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white shadow-lg p-6 rounded-lg border border-green-100 hover:shadow-xl transition duration-300">
            <div className="text-green-600 text-4xl mb-2">🏪</div>
            <h3 className="text-3xl font-bold text-gray-800">
              <CountUp end={120} />+
            </h3>
            <p className="text-sm text-gray-600 mt-1">Stores Managed</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg p-6 rounded-lg border border-green-100 hover:shadow-xl transition duration-300">
            <div className="text-green-600 text-4xl mb-2">🕒</div>
            <h3 className="text-3xl font-bold text-gray-800">
              <CountUp end={7} />+ yrs
            </h3>
            <p className="text-sm text-gray-600 mt-1">Experience</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg p-6 rounded-lg border border-green-100 hover:shadow-xl transition duration-300">
            <div className="text-green-600 text-4xl mb-2">📦</div>
            <h3 className="text-3xl font-bold text-gray-800">
              <CountUp end={300} />
              K+
            </h3>
            <p className="text-sm text-gray-600 mt-1">Products Listed</p>
          </div>

          {/* Card 4 */}
          <div className="bg-white shadow-lg p-6 rounded-lg border border-green-100 hover:shadow-xl transition duration-300">
            <div className="text-green-600 text-4xl mb-2">⭐</div>
            <h3 className="text-3xl font-bold text-gray-800">
              4.
              <CountUp end={9} />
              /5
            </h3>
            <p className="text-sm text-gray-600 mt-1">Avg Client Rating</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <div className="mt-10 bg-green-100 p-6 rounded-lg text-center border-l-4 border-green-500">
        <h4 className="text-lg font-semibold mb-2 text-green-700">
          Let’s Work Together
        </h4>
        <p className="text-gray-800 mb-4">
          Looking to grow your e-commerce store or launch a new product? I'm
          ready to help you reach your goals.
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

export default About;
