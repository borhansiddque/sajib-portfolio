import React from "react";
import footerBg1 from "../assets/footer-bg-1.jpg";
import footerBg2 from "../assets/footer-bg-2.jpg";
import Button from "./Button";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const socialMedia = [
    { id: 1, icon: <Linkedin size={20} />, link: "https://linkedin.com" },
    { id: 2, icon: <Instagram size={20} />, link: "https://instagram.com" },
    { id: 3, icon: <Facebook size={20} />, link: "https://facebook.com" },
    { id: 4, icon: <Twitter size={20} />, link: "https://twitter.com" },
  ];

  return (
    <footer
      className="py-16 bg-center bg-cover"
      style={{
        backgroundImage: `url(${footerBg1})`,
      }}
    >
      <div className="max-w-[1380px] mx-auto px-5">
        {/* CTA Section */}
        <div
          className="pt-[90px] pb-[75px] rounded-2xl space-y-6 bg-center bg-cover text-center text-white"
          style={{
            backgroundImage: `url(${footerBg2})`,
          }}
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-snug">
            Ready to Scale Your E-commerce Store?
          </h2>
          <p className="mb-6 max-w-2xl mx-auto opacity-80">
            Whether you're just starting out or looking to take your store to
            the next level, I bring 7+ years of proven experience to help you
            grow faster and smarter. Let’s turn your goals into results!
          </p>
          <div className="flex justify-center">
            <Button>Get In Touch</Button>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-16 border-gray-600" />

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo / Name */}
          <div className="font-bold text-2xl md:text-3xl relative text-white">
            <p>Oahidul Islam</p>
            <div className="bg-emerald-500 w-2 h-2 rounded-full absolute bottom-1.5 -right-3.5 animate-pulse"></div>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center items-center gap-4">
            {socialMedia.map((social) => (
              <a
                key={social.id}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-white text-white rounded-full hover:border-emerald-400 hover:text-emerald-400 hover:bg-gray-900 transition duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright + Developed By */}
        <div className="text-center mt-10 space-y-2">
          <p className="text-sm text-gray-300">
            &copy; {new Date().getFullYear()} Oahidul Islam Sajib. All rights
            reserved.
          </p>
          <p className="text-xs text-gray-400">
            Developed by{" "}
            <a
              href="https://3s-soft.com/"
              target="_blank"
              className="text-emerald-400 font-semibold"
            >
              3S-Soft
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
