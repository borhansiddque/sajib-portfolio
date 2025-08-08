import React from "react";
import { Linkedin, Facebook, MessageCircleMore } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal p-6 flex flex-col sm:flex-row items-center justify-between bg-green-100 text-gray-800">
      {/* Copyright */}
      <p className="text-sm mb-2 sm:mb-0">
        © {new Date().getFullYear()} Oahidul Islam Sajib — All rights reserved.
      </p>

      {/* Social Media Links */}
      <div className="flex gap-4 text-xl">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/wahid-sajib-1b3370176/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-800 hover:text-green-600 transition"
        >
          <Linkedin size={20} />
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/8801800000089"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-800 hover:text-green-600 transition"
        >
          <MessageCircleMore size={20} />
        </a>

        {/* Facebook */}
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-800 hover:text-green-600 transition"
        >
          <Facebook size={20} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
