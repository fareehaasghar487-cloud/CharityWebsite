import React from "react";

const FeaturedCampaignsSection = () => {
  const campaigns = [
    {
      category: "Health",
      title: "Medical Support for Families",
      charity: "Qatar Red Crescent",
      description:
        "Provide essential medical care and medication for low-income families across Qatar",
      raised: 450000,
      goal: 750000,
      donors: 1245,
      daysLeft: 12,
      verified: true,
      image:
        "https://images.pexels.com/photos/33763195/pexels-photo-33763195.jpeg",
    },
    {
      category: "Education",
      title: "Digital Learning for Students",
      charity: "Education Above All",
      description:
        "Supply tablets and internet access for students in need to continue their education",
      raised: 285000,
      goal: 500000,
      donors: 892,
      daysLeft: 21,
      verified: true,
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    },
    {
      category: "Relief",
      title: "Winter Aid Package Distribution",
      charity: "Qatar Charity",
      description:
        "Provide warm clothing, blankets and heating equipment for families during winter months",
      raised: 620000,
      goal: 800000,
      donors: 1567,
      daysLeft: 5,
      verified: true,
      image:
        "https://images.pexels.com/photos/14831647/pexels-photo-14831647.jpeg",
    },
  ];

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-QA", {
      style: "currency",
      currency: "QAR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const calculatePercentage = (raised, goal) => {
    return Math.min(100, Math.round((raised / goal) * 100));
  };

  return (
    <section className="mb-6 pt-24 bg-gray-50 text-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 bg-[#9e0909]/30 rounded-full font-medium text-sm mb-6 text-[#680808]">
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
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Verified Campaigns
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Make a Difference Today
          </h2>
          <p className="text-lg text-gray-700/80">
            Support RACA-approved campaigns from trusted charities in Qatar. All
            campaigns are integrated with Sandi for transparent impact.
          </p>
        </div>

        {/* Campaigns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {campaigns.map((campaign, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200 group"
            >
              {/* Campaign Image */}
              <div className="h-48 relative overflow-hidden">
                <img
                  src={campaign.image}
                  alt={campaign.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold ${campaign.category === "Health"
                      ? "bg-[#9e0909]/40 text-[#680808]"
                      : campaign.category === "Education"
                        ? "bg-[#680808]/30 text-[#9e0909]"
                        : "bg-[#9e0909]/20 text-[#680808]"
                      }`}
                  >
                    {campaign.category}
                  </span>
                </div>

                {campaign.verified && (
                  <div className="absolute top-4 right-4 bg-white rounded-full p-1.5 shadow-md text-[#680808]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                )}
              </div>

              {/* Campaign Content */}
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="text-gray-900 font-medium">{campaign.charity}</span>
                </div>

                <h3 className="text-xl font-semibold mb-3 leading-tight">
                  {campaign.title}
                </h3>
                <p className="text-gray-700/80 mb-5">{campaign.description}</p>

                {/* Progress Bar */}
                <div className="mb-5">
                  <div className="flex justify-between text-sm text-gray-900 mb-2 font-medium">
                    <span>
                      {calculatePercentage(campaign.raised, campaign.goal)}%
                      funded
                    </span>
                    <span>{formatCurrency(campaign.raised)}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="h-2.5 rounded-full"
                      style={{
                        width: `${calculatePercentage(campaign.raised, campaign.goal)}%`,
                        background: "linear-gradient(to right, #680808, #9e0909, #680808)",
                      }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>Raised</span>
                    <span>Goal: {formatCurrency(campaign.goal)}</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex justify-between text-sm text-gray-900 mb-6">
                  <span>{campaign.donors.toLocaleString()} donors</span>
                  <span>{campaign.daysLeft} days left</span>
                </div>

                {/* CTA Button */}
                <button className="w-full bg-gradient-to-r from-[#680808] via-[#9e0909] to-[#680808] text-white font-semibold py-2.5 px-4 rounded-lg transition duration-300 shadow-md hover:shadow-lg">
                  Donate Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <button className="bg-white/20 hover:bg-white/30 text-gray-900 font-semibold py-2.5 px-10 rounded-lg border-2 border-gray-300 transition duration-300 shadow-md hover:shadow-lg">
            View All Campaigns
          </button>
          <p className="text-sm text-gray-500 mt-4">
            All campaigns are RACA-approved and Sandi-integrated
          </p>
        </div>
      </div>
    </section>

  );
};

export default FeaturedCampaignsSection;
