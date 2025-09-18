import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

function Footer()
{
  return (
    <footer className="bg-gradient-to-t from-[#1A1A1A] via-[#2B2B2B] to-[#3B3B3B] text-white pt-12 w-full">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Top Section */}
        <div className="flex flex-col sm:flex-row justify-between gap-12 mb-12">
          {/* Company Info */}
          <div className="sm:w-1/2">
            <h3 className="header text-3xl font-bold">Evolve Vue Pvt. Ltd.</h3>
            <p className="subheader text-lg text-gray-300 mt-4 max-w-md leading-relaxed">
              Empowering healthcare with reliable outsourcing solutions.
              Delivering excellence in medical documentation, data processing,
              and healthcare support worldwide.
            </p>
          </div>

          {/* Links & Contact */}
          <div className="flex flex-col sm:flex-row gap-8 sm:w-1/2">
            {/* Quick Links */}
            <div className="subheader flex flex-col sm:w-1/2">
              <h4 className="header text-xl font-semibold text-gold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link to="/" className="hover:text-gold transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-gold transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-gold transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-gold transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:w-1/2">
              <h4 className="header text-xl font-semibold text-gold mb-4">Contact Us</h4>
              <ul className="subheader space-y-2 text-gray-300">
                <li>
                  Email:{" "}
                  <a
                    href="mailto:vudeviservices@gmail.com"
                    className="hover:text-gold transition-colors"
                  >
                    vudeviservices@gmail.com
                  </a>
                </li>
                <li>
                  Phone:{" "}
                  <a
                    href="tel:+977123456789"
                    className="hover:text-gold transition-colors"
                  >
                    +977
                  </a>
                </li>
                <li>
                  Address: Balkumari-Gwarko, Lalitpur, Nepal
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Social Icons */}
          <div className="flex gap-6 text-gold">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <FaTwitter size={20} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-gray-400 text-sm text-center sm:text-right">
            &copy; {new Date().getFullYear()} Evolve Vue Pvt. Ltd. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
