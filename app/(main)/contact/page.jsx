import { Facebook, Instagram } from "lucide-react";
import React from "react";
import { FaTiktok } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      <h1 className="text-3xl font-bold text-center mb-10">Contact Us</h1>

      <div className="flex flex-col md:flex-row gap-6 justify-center">
        {/* Get in Touch Form Card */}
        <div className="bg-white shadow-lg rounded-lg p-8 flex-1">
          <h2 className="text-xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-6">
            We'd love to hear from you! Please fill out the form below and we'll
            get back to you as soon as possible.
          </p>

          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Your Message"
                rows="5"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <button
              className="bg-[#ffddd5] text-black rounded-sm font-light tracking-widest p-2 mt-4 opacity-80 hover:opacity-100  w-full  py-2 px-4 hover:bg-[#efb7ab]
            transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information Card */}
        <div className="bg-gray-50 shadow-lg rounded-lg p-8 flex-1">
          <h2 className="text-xl font-bold mb-6">Contact Information</h2>

          <div className="mb-6">
            <p className="text-gray-600">Setif, Beni Aziz , Tairawt Vibe</p>
          </div>

          <div className="mb-6">
            <p className="text-gray-600">(213) 4 56 78 90</p>
          </div>

          <div className="mb-8">
            <p className="text-gray-600">sylonbags@gmail.com</p>
          </div>

          <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-600 hover:text-black hover:scale-110 transition-all duration-300"
            >
              <FaTiktok size={24} />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-black hover:scale-110 transition-all duration-300"
            >
              <Instagram />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-black hover:scale-110 transition-all duration-300"
            >
              <Facebook />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
