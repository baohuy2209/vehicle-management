"use client";
import React from "react";
import {
  Building2,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Linkedin,
  Globe,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const footerLinks = {
    services: [
      "Office Leasing",
      "Virtual Offices",
      "Meeting Rooms",
      "Business Services",
      "Property Management",
    ],
    company: ["About Us", "Our Team", "Careers", "Press Releases", "Awards"],
    resources: [
      "Tenant Portal",
      "Building Directory",
      "Parking Information",
      "Emergency Contacts",
      "Sustainability",
    ],
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <div
              className="flex items-center space-x-3 cursor-pointer"
              onClick={scrollToTop}
            >
              <Building2 className="h-8 w-8 text-amber-400" />
              <span className="text-xl font-bold">Saigon Centre</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Vietnam's premier business destination in the heart of Ho Chi Minh
              City. Setting the standard for commercial excellence since
              establishment.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-amber-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  65 Le Loi Boulevard, District 1, HCMC
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-amber-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">+84 28 3822 4888</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-amber-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  info@saigoncentre.com
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-amber-400 transition-colors duration-200 text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-amber-400 transition-colors duration-200 text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-amber-400 transition-colors duration-200 text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Newsletter */}
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Social Media */}
            <div className="flex items-center space-x-6">
              <span className="text-gray-400 text-sm">Follow us:</span>
              <div className="flex items-center space-x-4">
                <Link
                  href="#"
                  className="bg-gray-800 hover:bg-blue-600 p-2 rounded-lg transition-colors duration-200"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="bg-gray-800 hover:bg-blue-700 p-2 rounded-lg transition-colors duration-200"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg transition-colors duration-200"
                >
                  <Globe className="h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Newsletter */}
            <div className="flex items-center space-x-3">
              <span className="text-gray-400 text-sm">Stay updated:</span>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 border border-gray-700 rounded-l-lg px-4 py-2 text-sm focus:outline-none focus:border-amber-400 transition-colors duration-200"
                />
                <button className="bg-amber-500 hover:bg-amber-600 px-4 py-2 rounded-r-lg text-sm font-medium transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Saigon Centre. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link
                href="#"
                className="hover:text-amber-400 transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="hover:text-amber-400 transition-colors duration-200"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="hover:text-amber-400 transition-colors duration-200"
              >
                Site Map
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
