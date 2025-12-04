import React from "react";
import {
  FiHeart,
  FiArrowRight,
  FiCheckCircle,
  FiPlay,
  FiDollarSign,
  FiTarget,
  FiTruck,
  FiAward,
  FiVideo
} from "react-icons/fi";

export default function MoneyPurs() {
  const steps = [
    {
      id: 1,
      title: "You Donate",
      desc: "Your contribution is securely received through our platform.",
      icon: <FiDollarSign className="w-8 h-8" />,
    },
    {
      id: 2,
      title: "Allocation",
      desc: "Funds are allocated to verified charity campaigns.",
      icon: <FiTarget className="w-8 h-8" />,
    },
    {
      id: 3,
      title: "Distribution",
      desc: "Money is distributed to provide food, shelter, or healthcare.",
      icon: <FiTruck className="w-8 h-8" />,
    },
    {
      id: 4,
      title: "Impact",
      desc: "Donors receive updates with photos, stories, and real outcomes.",
      icon: <FiAward className="w-8 h-8" />,
    },
  ];

  const videos = [
    {
      url: "https://www.youtube.com/embed/Vqvnb2WORhk?si=V9XjE7n1edOXfnoR",
      title: "Transparency in Action"
    },
    {
      url: "https://www.youtube.com/embed/ysz5S6PUM-U",
      title: "Success Stories"
    },
    {
      url: "https://www.youtube.com/embed/ScMzIvxBSi4",
      title: "Community Impact"
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-[#543D2E10] pt-16 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-2 mb-4 rounded-full" style={{ backgroundColor: "#82143520", color: "#543D2E" }}>
            <FiHeart className="mr-2" />
            <span>Transparent Process</span>
          </div>
          <h2 className="text-4xl font-bold mb-4" style={{ color: "#543D2E" }}>
            What Happens With Your <span style={{ color: "#821435" }}>Donation?</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: "#543D2E" }}>
            Every contribution goes through a carefully managed process to ensure maximum impact and transparency.
          </p>
        </div>

        {/* Step Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {steps.map((step) => (
            <div
              key={`step-${step.id}`}
              className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl text-white mb-6 group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: "#821435" }}>
                {step.icon}
              </div>
              <div className="flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold mb-4" style={{ backgroundColor: "#82143520", color: "#821435" }}>
                {step.id}
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: "#543D2E" }}>{step.title}</h3>
              <p style={{ color: "#543D2E" }} className="leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Video Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center px-4 py-2 mb-4 rounded-full" style={{ backgroundColor: "#82143520", color: "#543D2E" }}>
            <FiVideo className="mr-2" />
            <span>See Our Impact</span>
          </div>
          <h3 className="text-3xl font-bold mb-4" style={{ color: "#543D2E" }}>
            Witness the <span style={{ color: "#821435" }}>Difference</span>
          </h3>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: "#543D2E" }}>
            Watch these videos to see how your donations transform lives and communities.
          </p>
        </div>

        {/* Video Section */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, idx) => (
            <div key={`video-${idx}`} className="relative group">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl z-10 flex items-end p-6" style={{ background: "linear-gradient(to top, #821435, transparent)" }}>
                <h4 className="text-white text-lg font-semibold">{video.title}</h4>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#821435cc] text-white transform scale-100 group-hover:scale-110 transition-transform duration-300">
                  <FiPlay className="w-8 h-8 ml-1" />
                </div>
              </div>
              <iframe
                src={video.url}
                title={`Video ${idx + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-64 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300"
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
