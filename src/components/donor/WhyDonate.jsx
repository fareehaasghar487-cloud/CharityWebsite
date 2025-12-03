import React, { useEffect } from "react";
import { 
  FiRefreshCw, 
  FiGlobe, 
  FiShield, 
  FiLock,
  FiArrowRight,
  FiAward,
  FiHeart
} from "react-icons/fi";
import { Link } from "react-router-dom"; 
import AOS from "aos";
import "aos/dist/aos.css";

export default function WhyDonate() {
  useEffect(() => {
    AOS.init({
      duration: 100,
      once: true,
    });
  }, []);

  const trustPoints = [
    {
      icon: <FiRefreshCw className="w-10 h-10 text-green-700" />,
      title: "Transparency",
      desc: "Powered by blockchain and real-time tracking for every donation.",
    },
    {
      icon: <FiGlobe className="w-10 h-10 text-green-700" />,
      title: "Sandi Integration",
      desc: "Ensures no duplication of donations and campaign validation.",
    },
    {
      icon: <FiShield className="w-10 h-10 text-green-700" />,
      title: "Compliance",
      desc: "Fully regulated under RACA guidelines for safe giving.",
    },
    {
      icon: <FiLock className="w-10 h-10 text-green-700" />,
      title: "Security",
      desc: "Advanced SSL encryption, AML monitoring & fraud detection.",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-green-50" id="why-donate">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Label */}
        <div className="inline-flex items-center justify-center px-4 py-2 mb-4 bg-green-100 rounded-full text-green-700 font-medium">
          <FiAward className="mr-2" />
          <span>Trust & Transparency</span>
        </div>
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Why Choose <span className="text-green-700">Us?</span>
        </h2>
        
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          We are committed to building <span className="font-semibold text-green-700">trust</span> 
          by ensuring transparency, compliance, and security in every step of the donation process.
        </p>

        {/* Trust Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {trustPoints.map((point, index) => (
            <div
              key={index}
              data-aos="flip-right"
              className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="inline-flex items-center justify-center p-4 mb-6 rounded-2xl bg-green-100 group-hover:bg-green-200 transition-colors duration-300">
                {point.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {point.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{point.desc}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-6 md:mb-0">
              <div className="p-3 bg-green-100 rounded-full text-green-700 mr-4">
                <FiHeart className="w-8 h-8" />
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold text-gray-900">
                  Ready to Make a Difference?
                </h3>
                <p className="text-gray-600">Your donation can change lives today.</p>
              </div>
            </div>

            <Link to="/contact">
              <button className="flex items-center justify-center px-6 py-3 bg-green-700 text-white font-medium rounded-full hover:bg-green-500 transition-colors duration-300 group">
                Donate Now
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

