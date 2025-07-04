"use client";

import React from "react";
import { ArrowRight, Star } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden mb-1"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/2835436/pexels-photo-2835436.jpeg"
          alt="Ho Chi Minh City skyline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-amber-400/20 border border-amber-400/30 rounded-full px-4 py-2 backdrop-blur-sm">
              <Star className="h-4 w-4 text-amber-400" />
              <span className="text-sm font-medium text-amber-100">
                Premier Business Destination
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Welcome to
                <br />
                <span className="text-amber-400">Saigon Centre</span>
              </h1>
              <p className="text-xl sm:text-2xl text-blue-100 font-light leading-relaxed">
                The heart of business and commerce in Ho Chi Minh City
              </p>
            </div>

            {/* Description */}
            <p className="text-lg text-blue-50 leading-relaxed max-w-2xl">
              Experience Vietnam&apos;s most prestigious commercial hub, where modern
              architecture meets traditional Vietnamese hospitality. Located in
              District 1, we offer world-class facilities and unmatched
              convenience.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <button
                onClick={scrollToContact}
                className="group bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <span>Get in Touch</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("about")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group border-2 border-white/30 hover:border-white/50 text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold transition-all duration-300 backdrop-blur-sm"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Stats or Secondary Content */}
          <div className="lg:text-right space-y-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-3xl font-bold text-amber-400">50+</div>
                <div className="text-blue-100 font-medium">Premium Offices</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-3xl font-bold text-amber-400">24/7</div>
                <div className="text-blue-100 font-medium">
                  Security & Service
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-3xl font-bold text-amber-400">100%</div>
                <div className="text-blue-100 font-medium">Occupancy Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-3xl font-bold text-amber-400">
                  District 1
                </div>
                <div className="text-blue-100 font-medium">Prime Location</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
