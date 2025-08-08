import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { Mail, MessageCircleMore } from "lucide-react";


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "your_service_id",    // Replace with your service ID
        "your_template_id",   // Replace with your template ID
        form.current,
        "your_public_key"     // Replace with your public key
      )
      .then(
        () => {
          toast.success("✅ Message sent successfully!");
          form.current.reset();
        },
        () => {
          toast.error("❌ Something went wrong. Try again.");
        }
      );
  };

  return (
    <div className="max-w-6xl mx-auto px-5 py-10">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-green-700 mb-2">Let's Connect</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          I’d love to hear about your project or help you grow your online store.
          Whether you're looking for a product listing expert or full e-commerce
          management — I’m here to help.
        </p>
      </div>

      {/* Grid: Contact Info + Form */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* Left: Contact Info */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-green-600 mb-2">Contact Information</h3>
            <p className="text-gray-700">
              📍Address: Chattogram, Bangladesh
            </p>
            <p className="text-gray-700">
              📞 Phone: 
                +880 1851334823
            </p>
            <p className="text-gray-700">
              🔗 LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/wahid-sajib-1b3370176/"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/wahid-sajib
              </a>
            </p>
          </div>

          {/* WhatsApp CTA Block */}
          <div className="bg-green-100 border-l-4 border-green-500 p-4 rounded-lg shadow-sm">
            <h4 className="font-semibold text-green-700 text-lg mb-2">Quick Chat on WhatsApp</h4>
            <p className="text-gray-700 mb-2">
              Prefer instant communication? You can directly message me via WhatsApp for a quick response.
            </p>
            <a
              href="https://wa.me/8801851334823"
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition flex items-center gap-2 w-fit"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircleMore /> Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div>
          <form ref={form} onSubmit={sendEmail} className="space-y-5">
            <div>
              <label className="block mb-1 font-medium">Full Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email Address</label>
              <input
                type="email"
                name="email"
                required
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                name="message"
                rows="5"
                required
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition flex items-center gap-2 cursor-pointer"
            >
              <Mail /> Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
