import React, { useEffect } from "react";
import { FaBuilding, FaHandshake, FaChartLine } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function  CorporateServ(){
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  return (
    <section className="w-full py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900">
            Corporate Sponsorship
          </h2>
          <p className="mt-3 text-green-700 max-w-2xl mx-auto">
            Partner with us to create long-lasting social impact. Our corporate
            sponsorship program provides verified reports, branding visibility,
            and impactful opportunities for companies to give back.
          </p>
        </div>

        {/* Sponsorship Opportunities */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div
            data-aos="zoom-out"
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition border border-green-200"
          >
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[palegreen]/40 mb-5">
              <FaHandshake className="text-green-700 text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-green-900 mb-3">
              Sponsorship Opportunities
            </h3>
            <p className="text-green-700">
              Choose from tailored sponsorship packages that align with your
              company’s CSR goals while supporting life-changing community
              initiatives.
            </p>
          </div>

          {/* Card 2 */}
          <div
            data-aos="flip-up"
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition border border-green-200"
          >
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[palegreen]/40 mb-5">
              <FaChartLine className="text-green-700 text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-green-900 mb-3">
              Verified Impact Reports
            </h3>
            <p className="text-green-700">
              Access transparent, data-driven reports that show the direct
              results of your contributions, ensuring accountability and trust.
            </p>
          </div>

          {/* Card 3 */}
          <div
            data-aos="flip-left"
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition border border-green-200"
          >
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[palegreen]/40 mb-5">
              <FaBuilding className="text-green-700 text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-green-900 mb-3">
              Branding Visibility
            </h3>
            <p className="text-green-700">
              Showcase your impact with recognition opportunities such as
              <span className="font-semibold text-green-900">
                {" "}
                “Your company helped build 10 schools”
              </span>{" "}
              and highlight your role in creating change.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="px-6 py-3 bg-[palegreen] text-green-900 font-medium rounded-full shadow hover:bg-green-400 hover:text-white transition">
            Become a Corporate Partner
          </button>
        </div>
      </div>
    </section>
  );
};


