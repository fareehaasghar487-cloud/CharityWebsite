import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const compainAry = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1652858672796-960164bd632b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
    name: "Education for All",
    desc: "Help underprivileged children get access to quality education.",
    target: "$10,000",
    raisedAmount: "$4,500",
  },
  {
    id: 2,
    img: "https://media.istockphoto.com/id/2171791945/photo/portrait-of-volunteers-during-donation-event-outdoors.webp?a=1&b=1&s=612x612",
    name: "Clean Water Project",
    desc: "Providing clean and safe drinking water in rural areas.",
    target: "$8,000",
    raisedAmount: "$5,200",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1593113616828-6f22bca04804?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0",
    name: "Medical Aid",
    desc: "Support critical medical treatments for those in need.",
    target: "$15,000",
    raisedAmount: "$9,800",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
    name: "Food for Families",
    desc: "Providing essential groceries to struggling families.",
    target: "$12,000",
    raisedAmount: "$7,600",
  },
  {
    id: 5,
    img: "https://media.istockphoto.com/id/2171791945/photo/portrait-of-volunteers-during-donation-event-outdoors.webp?a=1&b=1&s=612x612",
    name: "Disaster Relief",
    desc: "Emergency aid for families affected by natural disasters.",
    target: "$20,000",
    raisedAmount: "$12,400",
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1643321613219-6d50e1372c0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
    name: "Housing Support",
    desc: "Helping homeless families with safe housing solutions.",
    target: "$25,000",
    raisedAmount: "$14,700",
  },
];

export default function LatestCampaign() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="px-6 pt-32 sm:pt-36 md:pt-40 lg:pt-44 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-10" style={{ color: "#543D2E" }}>
        Active Campaigns
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {compainAry.map((item) => (
          <div
            data-aos="fade-up"
            key={item.id}
            className="bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transform transition-all duration-1000 ease-in-out border"
            style={{ borderColor: "#543D2E" }}
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold" style={{ color: "#543D2E" }}>
                {item.name}
              </h2>
              <p className="mt-2 text-sm" style={{ color: "#821435" }}>{item.desc}</p>

              {/* Progress Section */}
              <div className="mt-4">
                <div className="flex justify-between text-sm" style={{ color: "#543D2E" }}>
                  <p>Raised: {item.raisedAmount}</p>
                  <p>Target: {item.target}</p>
                </div>
                <div className="w-full bg-[#543D2E33] rounded-full h-2 mt-2">
                  <div
                    className="h-2 rounded-full"
                    style={{
                      backgroundColor: "#821435",
                      width: `${(parseInt(item.raisedAmount.replace(/[^0-9]/g, "")) /
                          parseInt(item.target.replace(/[^0-9]/g, ""))) *
                        100
                        }%`,
                    }}
                  ></div>
                </div>
              </div>

              <Link to="/contact">
                <button
                  className="mt-5 w-full py-2 rounded-lg font-medium cursor-pointer transition-all duration-500 ease-in-out"
                  style={{ backgroundColor: "#821435", color: "white" }}
                  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#543D2E")}
                  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#821435")}
                >
                  Donate Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
