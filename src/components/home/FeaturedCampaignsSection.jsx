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
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full font-medium text-sm mb-6"
            style={{
              background: "#82143520",
              color: "#821435"
            }}>
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

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#821435]">
            Make a Difference Today
          </h2>
          <p className="text-lg text-gray-700/80">
            Support RACA-approved campaigns from trusted charities in Qatar. All
            campaigns are integrated with Sandi for transparent impact.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {campaigns.map((campaign, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200 group"
            >
              {/* Image */}
              <div className="h-48 relative overflow-hidden">
                <img
                  src={campaign.image}
                  alt={campaign.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

                <div className="absolute top-4 left-4">
                  <span
                    className="px-3 py-1.5 rounded-full text-xs font-semibold"
                    style={{
                      background: "#82143520",
                      color: "#821435"
                    }}
                  >
                    {campaign.category}
                  </span>
                </div>

                {campaign.verified && (
                  <div
                    className="absolute top-4 right-4 rounded-full p-1.5 shadow-md"
                    style={{
                      background: "white",
                      color: "#543D2E"
                    }}
                  >
                    ✔
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-gray-900 font-medium">{campaign.charity}</span>

                <h3 className="text-xl font-semibold mb-3 mt-2 leading-tight text-[#543D2E]">
                  {campaign.title}
                </h3>

                <p className="text-gray-700/80 mb-5">{campaign.description}</p>

                {/* Progress */}
                <div className="mb-5">
                  <div className="flex justify-between text-sm text-gray-900 mb-2 font-medium">
                    <span>
                      {calculatePercentage(campaign.raised, campaign.goal)}% funded
                    </span>
                    <span>{formatCurrency(campaign.raised)}</span>
                  </div>

                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="h-2.5 rounded-full"
                      style={{
                        width: `${calculatePercentage(campaign.raised, campaign.goal)}%`,
                        background: "linear-gradient(to right, #543D2E, #821435, #543D2E)"
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

                {/* CTA */}
                <button
                  className="w-full text-white font-semibold py-2.5 px-4 rounded-lg transition duration-300 shadow-md hover:shadow-lg"
                  style={{
                    background: "linear-gradient(to right, #543D2E, #821435, #543D2E)"
                  }}
                >
                  Donate Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-12">
          <button
            className="font-semibold py-2.5 px-10 rounded-lg transition duration-300 shadow-md hover:shadow-lg border"
            style={{
              background: "#543D2E10",
              borderColor: "#543D2E50",
              color: "#543D2E"
            }}
          >
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
