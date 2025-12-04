import React, { useEffect } from "react";
import { FaBuilding, FaHandshake, FaChartLine } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function CorporateServ() {
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
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#543D2E" }}>
            Corporate Sponsorship
          </h2>
          <p className="mt-3 max-w-2xl mx-auto" style={{ color: "#821435" }}>
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
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition border"
            style={{ borderColor: "#543D2E" }}
          >
            <div
              className="flex items-center justify-center w-14 h-14 rounded-full mb-5"
              style={{ backgroundColor: "#82143540" }}
            >
              <FaHandshake className="text-2xl" style={{ color: "#543D2E" }} />
            </div>
            <h3 className="text-xl font-semibold mb-3" style={{ color: "#543D2E" }}>
              Sponsorship Opportunities
            </h3>
            <p style={{ color: "#821435" }}>
              Choose from tailored sponsorship packages that align with your
              company’s CSR goals while supporting life-changing community
              initiatives.
            </p>
          </div>

          {/* Card 2 */}
          <div
            data-aos="flip-up"
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition border"
            style={{ borderColor: "#543D2E" }}
          >
            <div
              className="flex items-center justify-center w-14 h-14 rounded-full mb-5"
              style={{ backgroundColor: "#82143540" }}
            >
              <FaChartLine className="text-2xl" style={{ color: "#543D2E" }} />
            </div>
            <h3 className="text-xl font-semibold mb-3" style={{ color: "#543D2E" }}>
              Verified Impact Reports
            </h3>
            <p style={{ color: "#821435" }}>
              Access transparent, data-driven reports that show the direct
              results of your contributions, ensuring accountability and trust.
            </p>
          </div>

          {/* Card 3 */}
          <div
            data-aos="flip-left"
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition border"
            style={{ borderColor: "#543D2E" }}
          >
            <div
              className="flex items-center justify-center w-14 h-14 rounded-full mb-5"
              style={{ backgroundColor: "#82143540" }}
            >
              <FaBuilding className="text-2xl" style={{ color: "#543D2E" }} />
            </div>
            <h3 className="text-xl font-semibold mb-3" style={{ color: "#543D2E" }}>
              Branding Visibility
            </h3>
            <p style={{ color: "#821435" }}>
              Showcase your impact with recognition opportunities such as
              <span className="font-semibold" style={{ color: "#543D2E" }}>
                {" "}“Your company helped build 10 schools”
              </span>{" "}
              and highlight your role in creating change.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button
            className="px-6 py-3 font-medium rounded-full shadow transition"
            style={{ backgroundColor: "#821435", color: "white" }}
            onMouseOver={e => {
              e.currentTarget.style.backgroundColor = "#543D2E";
              e.currentTarget.style.color = "white";
            }}
            onMouseOut={e => {
              e.currentTarget.style.backgroundColor = "#821435";
              e.currentTarget.style.color = "white";
            }}
          >
            Become a Corporate Partner
          </button>
        </div>
      </div>
    </section>
  );
}
