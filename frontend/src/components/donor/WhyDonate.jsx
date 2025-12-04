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
      icon: <FiRefreshCw className="w-10 h-10" style={{ color: "#821435" }} />,
      title: "Transparency",
      desc: "Powered by blockchain and real-time tracking for every donation.",
    },
    {
      icon: <FiGlobe className="w-10 h-10" style={{ color: "#821435" }} />,
      title: "Sandi Integration",
      desc: "Ensures no duplication of donations and campaign validation.",
    },
    {
      icon: <FiShield className="w-10 h-10" style={{ color: "#821435" }} />,
      title: "Compliance",
      desc: "Fully regulated under RACA guidelines for safe giving.",
    },
    {
      icon: <FiLock className="w-10 h-10" style={{ color: "#821435" }} />,
      title: "Security",
      desc: "Advanced SSL encryption, AML monitoring & fraud detection.",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-[#543D2E10] to-[#82143510]" id="why-donate">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Label */}
        <div className="inline-flex items-center justify-center px-4 py-2 mb-4 rounded-full font-medium" style={{ backgroundColor: "#82143520", color: "#543D2E" }}>
          <FiAward className="mr-2" />
          <span>Trust & Transparency</span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#543D2E" }}>
          Why Choose <span style={{ color: "#821435" }}>Us?</span>
        </h2>

        <p className="text-lg max-w-3xl mx-auto mb-12" style={{ color: "#543D2E" }}>
          We are committed to building <span className="font-semibold" style={{ color: "#821435" }}>trust</span>
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
              <div className="inline-flex items-center justify-center p-4 mb-6 rounded-2xl group-hover:opacity-80 transition-opacity duration-300" style={{ backgroundColor: "#82143520" }}>
                {point.icon}
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: "#543D2E" }}>
                {point.title}
              </h3>
              <p className="leading-relaxed" style={{ color: "#543D2E" }}>{point.desc}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-6 md:mb-0">
              <div className="p-3 rounded-full mr-4" style={{ backgroundColor: "#82143520", color: "#821435" }}>
                <FiHeart className="w-8 h-8" />
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold" style={{ color: "#543D2E" }}>
                  Ready to Make a Difference?
                </h3>
                <p style={{ color: "#543D2E" }}>Your donation can change lives today.</p>
              </div>
            </div>

            <Link to="/contact">
              <button
                className="flex items-center justify-center px-6 py-3 font-medium rounded-full transition-colors duration-300 group"
                style={{ backgroundColor: "#821435", color: "white" }}
                onMouseOver={e => e.currentTarget.style.backgroundColor = "#543D2E"}
                onMouseOut={e => e.currentTarget.style.backgroundColor = "#821435"}
              >
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
