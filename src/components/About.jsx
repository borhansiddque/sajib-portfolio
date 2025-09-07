import React from "react";
import CountUp from "react-countup";
import Button from "./Button";

const About = () => {
  return (
    <div className="py-20 px-5 bg-gray-50" id="about">
      <div className="max-w-[1500px] mx-auto">
        {/* Heading */}
        <div className="flex justify-center items-center">
          <h2 className="inline-block text-2xl font-bold text-emerald-400 bg-gray-900 mb-20 py-1 px-6 rounded-full uppercase tracking-wider">
            About Me
          </h2>
        </div>

        {/* Profile & Bio */}
        <div className="flex flex-col md:flex-row gap-10 items-center">
          {/* Profile Image */}
          <div className="flex-1">
            <img
              src="https://3s-soft.com/team-profile/Oahidul_Islam_Sajib.png"
              alt="Oahidul Islam Sajib"
              className="object-cover shadow-2xl shadow-[#0f0f0f30] rounded-2xl"
            />
          </div>

          <div className="flex-1">
            {/* Bio Content */}
            <div className="">
              <div className="">
                <span className="text-5xl">👋</span>
                <h3 className="text-xl font-semibold text-emerald-600">
                  Oahidul Islam Sajib
                </h3>
              </div>
              <p className="text-gray-700 mt-2 mb-4">
                I am a passionate <strong>E-commerce Store Manager</strong> with
                over <strong>7 years</strong> of hands-on experience helping
                brands and individuals build, manage, and scale their online
                stores. Based in <strong>Chattogram, Bangladesh</strong>, I
                specialize in optimizing product listings for platforms like{" "}
                <strong>Amazon, eBay, Shopify</strong>, and{" "}
                <strong>Etsy</strong>.
              </p>
              <p className="text-gray-700 mb-4">
                My journey started as a freelancer on <strong>Fiverr</strong>{" "}
                and <strong>Upwork</strong>, where I have completed hundreds of
                successful projects and earned long-term clients. I bring a
                strategic mindset, attention to detail, and proven methods to
                enhance visibility, increase conversions, and drive revenue.
              </p>
              <p className="text-gray-700">
                I believe that a well-managed store is the foundation of
                e-commerce success. From listing products to managing back-end
                operations—I offer end-to-end solutions that deliver results.
              </p>
            </div>
            {/* What I Do Section */}
            <div className="mt-10">
              <h3 className="text-2xl font-semibold text-emerald-600 mb-4">
                What I Do
              </h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>
                  Optimize product listings for SEO, visibility & conversion on
                  Amazon, eBay, Shopify & Etsy
                </li>
                <li>
                  Manage seller central accounts and ensure store health is
                  maintained
                </li>
                <li>
                  Provide ongoing store maintenance and performance reports
                </li>
                <li>
                  Help clients grow their revenue through smart sales and
                  listing strategies
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <section className="mt-20 text-center">
          <h2 className="text-2xl text-emerald-600 font-bold mb-10">
            🚀 Track Record
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white shadow-lg p-6 rounded-lg border border-green-100 hover:shadow-xl transition duration-300">
              <div className="text-green-600 text-4xl mb-2">🏪</div>
              <h3 className="text-3xl font-bold text-gray-800">
                <CountUp end={120} enableScrollSpy />+
              </h3>
              <p className="text-sm text-gray-600 mt-1">Stores Managed</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-lg p-6 rounded-lg border border-green-100 hover:shadow-xl transition duration-300">
              <div className="text-green-600 text-4xl mb-2">🕒</div>
              <h3 className="text-3xl font-bold text-gray-800">
                <CountUp end={7} enableScrollSpy />+ yrs
              </h3>
              <p className="text-sm text-gray-600 mt-1">Experience</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-lg p-6 rounded-lg border border-green-100 hover:shadow-xl transition duration-300">
              <div className="text-green-600 text-4xl mb-2">📦</div>
              <h3 className="text-3xl font-bold text-gray-800">
                <CountUp end={300} enableScrollSpy />
                K+
              </h3>
              <p className="text-sm text-gray-600 mt-1">Products Listed</p>
            </div>

            {/* Card 4 */}
            <div className="bg-white shadow-lg p-6 rounded-lg border border-green-100 hover:shadow-xl transition duration-300">
              <div className="text-green-600 text-4xl mb-2">⭐</div>
              <h3 className="text-3xl font-bold text-gray-800">
                4.
                <CountUp end={9} enableScrollSpy />
                /5
              </h3>
              <p className="text-sm text-gray-600 mt-1">Avg. Client Rating</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default About;
