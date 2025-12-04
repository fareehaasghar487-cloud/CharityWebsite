import React, { useState } from "react";

const ImpactShowcase = () => {
  const [activeTab, setActiveTab] = useState("all");

  const stats = [
    { value: "2.5M+", label: "Donations Processed", trend: "+15% this month" },
    { value: "150+", label: "Charities Registered", trend: "Across Qatar" },
    { value: "98%", label: "Donor Satisfaction", trend: "Based on 10k+ reviews" },
    { value: "100%", label: "Regulatory Compliance", trend: "Zero violations" },
  ];

  const features = [
    {
      title: "Real-time Tracking",
      description: "Follow your donation from start to finish with complete transparency.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      category: "transparency",
    },
    {
      title: "Sandi Integration",
      description: "Seamless coordination with Qatar's national assistance platform to prevent duplication.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      category: "integration",
    },
    {
      title: "Blockchain Security",
      description: "Tamper-proof records of all transactions ensuring complete transparency.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      category: "security",
    },
    {
      title: "Multi-platform Access",
      description: "Web and mobile apps available in both Arabic and English.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      category: "accessibility",
    },
    {
      title: "AML & Fraud Detection",
      description: "Advanced algorithms to detect and prevent suspicious activities.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      category: "security",
    },
    {
      title: "Automated Reporting",
      description: "Generate compliance and financial reports with a single click.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      category: "management",
    },
    {
      title: "KPI Dashboards",
      description: "Monitor performance metrics for charities and campaigns.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      category: "management",
    },
    {
      title: "Multi-payment Options",
      description: "Credit cards, bank transfers, QR codes, and digital wallets.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      category: "accessibility",
    },
  ];

  const userStories = [
    {
      quote: "As a donor, I can now see exactly where my contribution goes, which makes me more confident in giving.",
      author: "Ahmed Al-Thani",
      role: "Regular Donor",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    },
    {
      quote: "The Sandi integration has eliminated duplicate aid distribution, making our operations much more efficient.",
      author: "Fatima Al-Attiyah",
      role: "Charity Administrator",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    },
    {
      quote: "The compliance tools give us complete oversight while reducing our administrative workload significantly.",
      author: "Khalid Al-Sulaiti",
      role: "RACA Official",
      image:
        "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    },
  ];

  const filteredFeatures =
    activeTab === "all"
      ? features
      : features.filter((feature) => feature.category === activeTab);

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 mb-4 text-sm font-semibold text-white bg-gradient-to-r from-[#680808] via-[#9e0909] to-[#680808] rounded-full">
            Qatar's Premier Charity Platform
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 py-2 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-[#680808] via-[#9e0909] to-[#680808]">
            Transforming Charitable Giving in Qatar
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed text-[#680808]">
            A comprehensive digital platform integrating with Sandi to bring transparency, efficiency, and trust to charitable donations across Qatar.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-[#680808] via-[#9e0909] to-[#680808] text-white rounded-2xl shadow-lg p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="font-semibold mb-1">{stat.label}</div>
              <div className="text-sm">{stat.trend}</div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-[#680808]">Platform Features</h3>
            <p className="max-w-2xl mx-auto text-[#9e0909]">
              Advanced capabilities designed for all stakeholders in the charitable ecosystem
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {["all", "transparency", "security", "integration", "management", "accessibility"].map((tab) => (
              <button
                key={tab}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${activeTab === tab
                    ? "bg-gradient-to-r from-[#680808] via-[#9e0909] to-[#680808] text-white"
                    : "bg-white text-[#680808] border border-[#680808] hover:bg-[#ffcccc]"
                  }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === "all" ? "All Features" : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-[#680808] via-[#9e0909] to-[#680808] text-white rounded-2xl shadow-lg p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-center">{feature.title}</h3>
                <p className="text-center text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* User Testimonials */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-[#680808]">What Our Users Say</h3>
            <p className="max-w-2xl mx-auto text-[#9e0909]">
              Hear from stakeholders across the charitable ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {userStories.map((story, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-[#680808] via-[#9e0909] to-[#680808] text-white rounded-2xl shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={story.image}
                    alt={story.author}
                    className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-white"
                  />
                  <div>
                    <h4 className="font-semibold">{story.author}</h4>
                    <p className="text-sm">{story.role}</p>
                  </div>
                </div>
                <p className="italic">"{story.quote}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6 text-[#680808]">Join Qatar's Trusted Charity Platform</h3>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3 bg-gradient-to-r from-[#680808] via-[#9e0909] to-[#680808] text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition-colors">
              Register Your Charity
            </button>
            <button className="px-8 py-3 bg-white text-[#680808] border border-[#680808] font-semibold rounded-lg shadow-md hover:bg-[#ffcccc] transition-colors">
              Make a Donation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactShowcase;
