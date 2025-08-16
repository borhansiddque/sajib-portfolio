import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "qiangchen",
    platform: "Walmart Seller",
    comment:
      "He did a great job. He has professional experience in uploading products. I waited two months for each review by Walmart. I am very grateful for his patience! He enabled me to successfully pass all the processes. I highly recommend it!",
    rating: 5,
    country: "United States",
  },
  {
    id: 2,
    name: "gareginharutyun",
    platform: "Walmart Seller",
    comment:
      "Got my walmart listing published so fast",
    rating: 5,
    country: "United States",
  },
  {
    id: 3,
    name: "fcbayram",
    platform: "Amazon Seller",
    comment:
      "It was great work. I totally satisfied with his work. I recommend all.",
    rating: 5,
    country: "Turkey",
  },
  {
    id: 4,
    name: "James Turner",
    platform: "Amazon Seller",
    comment:
      "Oahidul was exceptional in managing my Amazon store. Product listings were SEO-optimized and boosted my sales by 35% in just 2 months.",
    rating: 5,
    country: "USA",
  },
  {
    id: 5,
    name: "Sarah Khalid",
    platform: "Shopify Owner",
    comment:
      "He helped me migrate and organize over 500 products. His attention to detail and responsiveness made the whole process smooth.",
    rating: 5,
    country: "UK",
  },
  {
    id: 6,
    name: "Carlos Mendes",
    platform: "eBay Business",
    comment:
      "Outstanding freelancer! Highly professional and always meets deadlines. My eBay store has never been better.",
    rating: 4,
    country: "Portugal",
  },
];

const Testimonials = () => {
  return (
    <div className="max-w-6xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-green-700">Client Testimonials</h2>
        <p className="text-gray-600 mt-2">
          What clients say about working with Oahidul Islam Sajib
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-green-200 text-green-900 font-semibold rounded-full w-10 h-10 flex items-center justify-center">
                {t.name.charAt(0)}
              </div>
              <div>
                <h3 className="font-semibold text-lg">{t.name}</h3>
                <p className="text-sm text-gray-500">{t.platform} — {t.country}</p>
              </div>
            </div>
            <p className="text-gray-700 mb-3">"{t.comment}"</p>
            <div className="flex text-yellow-500">
              {[...Array(t.rating)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
