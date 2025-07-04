"use client";

import React from "react";
import { MapPin, Train, Plane, Car, Clock, Globe } from "lucide-react";

const Location = () => {
  const locationHighlights = [
    {
      icon: MapPin,
      title: "District 1 Address",
      description: "Prime location in HCMC's central business district",
    },
    {
      icon: Train,
      title: "Metro Access",
      description: "5-minute walk to Ben Thanh Metro Station",
    },
    {
      icon: Plane,
      title: "Airport Connection",
      description: "30 minutes to Tan Son Nhat International Airport",
    },
    {
      icon: Car,
      title: "Major Roads",
      description: "Direct access to all major highways and routes",
    },
  ];

  const nearbyAttractions = [
    { name: "Ben Thanh Market", distance: "2 min walk" },
    { name: "Saigon Opera House", distance: "5 min walk" },
    { name: "Notre Dame Cathedral", distance: "8 min walk" },
    { name: "Reunification Palace", distance: "10 min walk" },
    { name: "Dong Khoi Shopping", distance: "3 min walk" },
    { name: "Nguyen Hue Walking Street", distance: "7 min walk" },
  ];

  return (
    <section id="location" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Perfect Location in the Heart of
                <span className="text-amber-400 block">Ho Chi Minh City</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Strategically positioned where business, culture, and
                convenience converge in Vietnam's most dynamic metropolis.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-400 leading-relaxed">
                Saigon Centre sits at the crossroads of commerce and culture in
                District 1, offering unparalleled access to government offices,
                financial institutions, luxury hotels, and premier shopping
                destinations. Your business benefits from the prestige and
                connectivity of HCMC's most coveted address.
              </p>

              {/* Location Features */}
              <div className="grid sm:grid-cols-2 gap-6">
                {locationHighlights.map((highlight, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-amber-500/20 p-3 rounded-lg flex-shrink-0">
                      <highlight.icon className="h-6 w-6 text-amber-400" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-white">
                        {highlight.title}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-800">
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-400">5min</div>
                <div className="text-gray-400 text-sm">to Metro</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-400">30min</div>
                <div className="text-gray-400 text-sm">to Airport</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-400">24/7</div>
                <div className="text-gray-400 text-sm">Accessibility</div>
              </div>
            </div>
          </div>

          {/* Map and Nearby Attractions */}
          <div className="space-y-8">
            {/* Map Placeholder */}
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg"
                alt="Ho Chi Minh City District 1 aerial view"
                className="w-full h-80 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-red-600" />
                  <span className="font-semibold text-gray-900">
                    Saigon Centre
                  </span>
                </div>
                <p className="text-sm text-gray-600">District 1, HCMC</p>
              </div>
            </div>

            {/* Nearby Attractions */}
            <div className="bg-gray-800 p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center space-x-2">
                <Globe className="h-5 w-5 text-amber-400" />
                <span>Nearby Attractions</span>
              </h3>
              <div className="grid gap-3">
                {nearbyAttractions.map((attraction, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                  >
                    <span className="text-gray-300">{attraction.name}</span>
                    <span className="text-amber-400 text-sm font-medium">
                      {attraction.distance}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
