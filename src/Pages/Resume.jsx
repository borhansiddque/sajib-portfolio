import React from "react";
import { ArrowDownToLine } from "lucide-react";

const Resume = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-green-700 mb-3">
            Resume
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            A brief overview of my experience, education, and certifications in
            the e-commerce industry.
          </p>
        </div>

        {/* Experience */}
        <section className="mb-10">
          <h3 className="text-xl font-semibold mb-3 text-green-600">
            Professional Experience
          </h3>
          <div className="space-y-5">
            <div>
              <h4 className="font-bold">
                E-commerce Store Manager – Freelance (Fiverr & Upwork)
              </h4>
              <p className="text-sm text-gray-600">2017 – Present</p>
              <ul className="list-disc ml-5 mt-1 text-gray-700">
                <li>
                  Managed 100+ client stores on Amazon, eBay, Shopify, and Etsy.
                </li>
                <li>Optimized product listings for SEO and sales growth.</li>
                <li>
                  Offered consultancy for new sellers and store setup guidance.
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold">E-commerce Strategist – 3S Soft</h4>
              <p className="text-sm text-gray-600">2022 – Present</p>
              <ul className="list-disc ml-5 mt-1 text-gray-700">
                <li>
                  Working with 3S Soft agency to provide tailored e-commerce
                  strategies.
                </li>
                <li>
                  Handled full-scale store management services for global
                  clients.
                </li>
                <li>
                  Helped build automated systems for bulk product listing and
                  analytics.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-10">
          <h3 className="text-xl font-semibold mb-3 text-green-600">
            Education
          </h3>
          <div>
            <h4 className="font-bold">
              Bachelor of Business Administration (BBA)
            </h4>
            <p className="text-sm text-gray-600">Chattogram, Bangladesh</p>
            <p className="text-sm text-gray-700">
              Specialized in E-commerce and Online Business Trends.
            </p>
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-10">
          <h3 className="text-xl font-semibold mb-3 text-green-600">
            Certifications
          </h3>
          <ul className="list-disc ml-5 text-gray-700">
            <li>Amazon Seller Central Mastery – Udemy</li>
            <li>Shopify Store Management – Coursera</li>
            <li>Etsy SEO & Listing Optimization – Skillshare</li>
          </ul>
        </section>

        {/* Download Resume */}
        <section className="flex items-center justify-center mt-10">
          <a
            href="/Oahidul-Islam-Sajib-Resume.pdf"
            download
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition flex items-center justify-center gap-1"
          >
            <ArrowDownToLine size={20} /> Download Resume (PDF)
          </a>
        </section>
      </div>
    </div>
  );
};

export default Resume;
