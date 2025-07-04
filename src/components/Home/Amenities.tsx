"use client";
import React from "react";
import {
  Wifi,
  Car,
  Coffee,
  Shield,
  Zap,
  Wind,
  Phone,
  Users,
  Briefcase,
  Building,
  Clock,
  Headphones,
} from "lucide-react";

const Amenities = () => {
  const amenities = [
    {
      icon: Wifi,
      title: "High-Speed Internet",
      description: "Fiber optic connectivity with 99.9% uptime guarantee",
    },
    {
      icon: Car,
      title: "Premium Parking",
      description: "Secure underground parking with valet service",
    },
    {
      icon: Coffee,
      title: "Executive Lounge",
      description: "Complimentary refreshments and networking space",
    },
    {
      icon: Shield,
      title: "24/7 Security",
      description: "Advanced access control and professional security team",
    },
    {
      icon: Zap,
      title: "Backup Power",
      description: "Uninterrupted power supply with generator backup",
    },
    {
      icon: Wind,
      title: "Climate Control",
      description: "Individual zone HVAC systems for optimal comfort",
    },
    {
      icon: Phone,
      title: "Telecom Ready",
      description: "Pre-installed telecommunications infrastructure",
    },
    {
      icon: Users,
      title: "Meeting Rooms",
      description: "Fully equipped conference facilities available hourly",
    },
    {
      icon: Briefcase,
      title: "Business Services",
      description: "Mail handling, reception, and administrative support",
    },
    {
      icon: Building,
      title: "Flexible Spaces",
      description: "Customizable layouts from 100 to 2,000 sqm",
    },
    {
      icon: Clock,
      title: "Extended Hours",
      description: "Building access available 24/7 for tenants",
    },
    {
      icon: Headphones,
      title: "Concierge Service",
      description: "Dedicated support for all tenant needs",
    },
  ];

  return (
    <section id="amenities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            World-Class Amenities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Every detail designed to enhance your business operations and
            provide an exceptional work environment for your team.
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="group bg-gray-50 hover:bg-blue-50 p-6 rounded-xl transition-all duration-300 hover:shadow-lg border border-gray-100 hover:border-blue-200"
            >
              <div className="space-y-4">
                <div className="bg-white group-hover:bg-blue-100 p-3 rounded-lg w-fit transition-colors duration-300">
                  <amenity.icon className="h-6 w-6 text-blue-800 group-hover:text-blue-900" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-900 transition-colors duration-300">
                    {amenity.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {amenity.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-800 to-blue-900 rounded-2xl p-8 sm:p-12">
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Ready to Experience Premium Office Space?
              </h3>
              <p className="text-blue-100 text-lg max-w-2xl mx-auto">
                Schedule a private tour and see why leading companies choose
                Saigon Centre as their Vietnam headquarters.
              </p>
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Schedule a Tour
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
