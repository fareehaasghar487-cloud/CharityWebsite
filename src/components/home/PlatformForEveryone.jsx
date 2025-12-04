import React from "react";

const PlatformForEveryone = () => {
  const userTypes = [
    {
      role: "Donors",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 
               0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 
               0 4 4 0 018 0z"
          />
        </svg>
      ),
      description:
        "Individuals and Corporates who want to make a difference",
      features: [
        "Give with confidence through transparent tracking",
        "Multiple payment options: card, bank transfer, QR code, digital wallet",
        "Receive instant receipts and real-time impact updates",
        "Choose from health, education, relief campaigns",
      ],
      cta: "Start Donating",
      accentColor: "#680808", // dark red
    },
    {
      role: "Charities",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 
               00-2 2v16m14 0h2m-2 0h-5m-9 
               0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 
               4h1m-5 10v-5a1 1 0 011-1h2a1 
               1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
      description: "Organizations managing campaigns and donations",
      features: [
        "Create and manage donation campaigns efficiently",
        "Upload legal documents and licenses for verification",
        "Track donations and distribution to beneficiaries",
        "Generate automated reports for RACA compliance",
      ],
      cta: "Register Your Charity",
      accentColor: "#9e0909", // dark red variant
    },
    {
      role: "Authority (RACA)",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 
               11.955 0 0112 2.944a11.955 
               11.955 0 01-8.618 3.04A12.02 
               12.02 0 003 9c0 5.591 3.824 
               10.29 9 11.622 5.176-1.332 
               9-6.03 9-11.622 
               0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      description: "Regulatory body with oversight and compliance tools",
      features: [
        "Approve or reject charity campaigns",
        "View all donations and campaigns in real-time",
        "Receive automated compliance and financial reports",
        "Track performance through KPI dashboards",
      ],
      cta: "Learn About Oversight",
      accentColor: "#680808", // dark red
    },
  ];

  return (
    <section className="py-20 bg-gray-100 px-8">
      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {userTypes.map((userType, index) => (
          <div
            key={index}
            className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-[#680808] group flex flex-col justify-between"
            style={{ minHeight: "520px" }} // consistent card height
          >
            {/* Top Content */}
            <div>
              {/* Accent */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 rotate-45 transform origin-bottom-left bg-gradient-to-br from-[#680808]/10 to-transparent"></div>
              </div>

              {/* Icon */}
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6"
                style={{ backgroundColor: `${userType.accentColor}15` }}
              >
                <div style={{ color: userType.accentColor }}>{userType.icon}</div>
              </div>

              {/* Role */}
              <h3 className="text-2xl font-bold text-[#680808] mb-3">
                {userType.role}
              </h3>
              <p className="text-[#9e0909] mb-7 leading-relaxed">
                {userType.description}
              </p>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {userType.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <div
                      className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-0.5"
                      style={{ backgroundColor: `${userType.accentColor}20` }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill={userType.accentColor}
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 
                       1.414l-8 8a1 1 0 01-1.414 
                       0l-4-4a1 1 0 011.414-1.414L8 
                       12.586l7.293-7.293a1 1 0 
                       011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-[#680808]">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button at bottom */}
            <button
              className="w-full py-2.5 px-6 rounded-xl font-semibold transition-all duration-300 hover:opacity-90 hover:shadow-md"
              style={{
                backgroundColor: userType.accentColor,
                color: "white",
              }}
            >
              {userType.cta}
            </button>
          </div>
        ))}
      </div>

      {/* Integration Section */}
      <div className="mt-20 bg-gradient-to-r from-[#680808] to-[#9e0909] rounded-2xl p-10 md:p-14 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-full h-full opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="smallGrid"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 20 0 L 0 0 0 20"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#smallGrid)" />
          </svg>
        </div>

        <div className="flex flex-col md:flex-row items-center relative z-10">
          {/* Left */}
          <div className="md:w-2/3 mb-8 md:mb-0 md:pr-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-sm font-medium mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              Integrated Solution
            </div>
            <h3 className="text-3xl font-bold mb-5">Seamless Sandi Integration</h3>
            <p className="mb-6 text-lg opacity-95 leading-relaxed">
              Our platform integrates directly with Qatar&apos;s national Sandi platform to ensure coordinated aid distribution and prevent duplication of assistance.
            </p>
            <ul className="space-y-4">
              {[
                "Sync beneficiary data to prevent duplicate assistance",
                "Unified database combining Sandi and our platform",
                "Full visibility of all aid distribution in Qatar",
              ].map((text, idx) => (
                <li key={idx} className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-3 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 
                             1.414l-8 8a1 1 0 01-1.414 
                             0l-4-4a1 1 0 011.414-1.414L8 
                             12.586l7.293-7.293a1 1 0 
                             011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-white text-lg">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right */}
          <div className="md:w-1/3 flex justify-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
              <div className="text-5xl font-bold mb-2">100%</div>
              <div className="text-xl font-medium mb-1">Coordination Efficiency</div>
              <div className="text-sm opacity-90 mt-2">No duplicate assistance</div>
              <div className="mt-6 w-full bg-white/20 rounded-full h-2.5">
                <div
                  className="bg-white h-2.5 rounded-full transition-all duration-1000"
                  style={{ width: "100%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformForEveryone;
