import React from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import bannerBg from "../assets/banner-bg.jpg";
import Navbar from "./Navbar";

const Banner = () => {
  const socialMedia = [
    { id: 1, icon: <Linkedin />, link: "https://facebook.com" },
    { id: 2, icon: <Instagram />, link: "https://twitter.com" },
    { id: 3, icon: <Facebook />, link: "https://twitter.com" },
    { id: 3, icon: <Twitter />, link: "https://twitter.com" },
  ];
  return (
    <div
      className="relative h-screen"
      style={{
        backgroundImage: `url(${bannerBg})`,
      }}
    >
      <div className="absolute top-0 left-0 w-full z-10 bg-transparent">
        <Navbar />
      </div>
      <div className="py-60">
        <div className="flex flex-col justify-center items-center text-center space-y-6">
          <div className="">
            <img
              src="https://img.3s-soft.com/uploads/oahidul-islam-sajib.jpg"
              alt="Oahidul Islam Sajib"
              className="w-44 object-cover shadow-2xl shadow-[#0f0f0f30] rounded-2xl"
            />
          </div>
          <h1 className="text-gray-900 text-8xl font-bold">
            Oahidul Islam <br /> Sajib
          </h1>
          <TypeAnimation
            sequence={[
              "E-commerce Store Manager",
              1000,
              "E-commerce Management",
              1000,
              "Product Listing Optimization",
              1000,
              "Amazon Seller Central",
              1000,
              "eBay Store Management",
              1000,
              "Shopify Store Management",
              1000,
              "Product Image Optimization",
              1000,
              "Etsy Store Management",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{
              fontSize: "20px",
              display: "inline-block",
              color: "#00d492",
              backgroundColor: "#101828",
              padding: "10px 20px",
              borderRadius: "8px",
            }}
            repeat={Infinity}
            className="text-9xl mt-10"
          />
          <p className="max-w-2xl text-center text-gray-700 text-lg px-4">
            I specialize in managing and optimizing e-commerce stores across
            platforms like Amazon, eBay, Shopify, and Etsy. From product listing
            optimization to image enhancement and store management, I help
            businesses grow their online presence and boost sales.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 absolute bottom-90 left-20">
          {socialMedia.map((social) => (
            <a
              key={social.id}
              href={social.link}
              target="_blank"
              className="text-2xl p-3 border border-[#0F0F0F] rounded-full hover:text-emerald-400 hover:bg-gray-900 transition duration-300"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
