import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Website Name and Description */}
          <div>
            <h2 className="text-2xl font-bold mb-4">EquiSports</h2>
            <p className="text-gray-400">
              Your one-stop destination for premium sports equipment and gear.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="text-gray-400">
              <li className="mb-2">Email: support@equisports.com</li>
              <li className="mb-2">Phone: +1 (123) 456-7890</li>
              <li className="mb-2">Address: 123 Sports Lane, City, Country</li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} EquiSports. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;