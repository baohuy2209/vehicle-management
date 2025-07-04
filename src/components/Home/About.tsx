"use client";
import React from "react";
import { CheckCircle, Trophy, Users, Globe } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Trophy,
      title: "Award-Winning Design",
      description:
        "Recognized for architectural excellence and sustainable building practices",
    },
    {
      icon: Users,
      title: "Thriving Community",
      description: "Home to leading international and Vietnamese companies",
    },
    {
      icon: Globe,
      title: "Strategic Location",
      description: "In the heart of HCMC's central business district",
    },
  ];

  const highlights = [
    "LEED Gold certified building",
    "35 floors of premium commercial space",
    "State-of-the-art infrastructure",
    "Multilingual management team",
    "Flexible lease terms available",
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Redefining Business Excellence in
                <span className="text-blue-800 block">Ho Chi Minh City</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Since our establishment, Saigon Centre has been the preferred
                choice for multinational corporations and growing businesses
                seeking premium office space in Vietnam's economic capital.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Our commitment to excellence extends beyond providing workspace.
                We create environments where businesses thrive, partnerships
                flourish, and innovation drives success. With cutting-edge
                facilities and personalized service, we support your company's
                growth in Southeast Asia's most dynamic market.
              </p>

              {/* Highlights */}
              <div className="space-y-3">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image and Features */}
          <div className="space-y-8">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/2292837/pexels-photo-2292837.jpeg"
                alt="Modern office building interior"
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent rounded-2xl"></div>
            </div>

            {/* Feature Cards */}
            <div className="grid gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                      <feature.icon className="h-6 w-6 text-blue-800" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
