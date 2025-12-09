 import React, { useEffect } from "react";
import { FaBullseye, FaCheckCircle, FaCalendarAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useGetAllCampaignsQuery } from "../../../Redux/slices/CampaignApi";

const CampaignCard = () => {
  const { data: campaigns = [], isLoading, error } = useGetAllCampaignsQuery();

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  if (isLoading) return <p className="text-center py-10">Loading campaigns...</p>;
  if (error) return <p className="text-center py-10 text-red-600">Failed to load campaigns.</p>;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-14" data-aos="fade-down">
          <span className="text-[#821435]">Active</span> Campaigns
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {campaigns.map((campaign, index) => {
            const progress = Math.min(
              (campaign.raisedAmount / campaign.goalAmount) * 100,
              100
            );

            const daysRemaining = Math.ceil(
              (new Date(campaign.endDate) - new Date()) / (1000 * 60 * 60 * 24)
            );

            return (
              <div
                key={campaign._id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-[#821435] hover:shadow-2xl transition duration-500 group flex flex-col"
              >
                {/* Image */}
                <div className="h-65 w-full relative overflow-hidden">
                  {campaign.image && (
                    <img
                      src={campaign.image}
                      alt={campaign.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  )}
                  <div className="absolute top-3 right-3 bg-[#821435] text-white text-xs px-3 py-1 rounded-full font-medium">
                    {campaign.category}
                  </div>
                  {daysRemaining > 0 && (
                    <div className="absolute top-3 left-3 bg-[#543D2E] text-white text-xs px-3 py-1 rounded-full">
                      {daysRemaining} days left
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 pt-1 flex flex-col flex-grow">
                  <h3 className="text-2xl font-semibold text-black mb-2">
                    {campaign.title}
                  </h3>
                  <p className="text-sm text-black mb-4 line-clamp-3 flex-grow">
                    {campaign.description}
                  </p>

                  <div className="mb-5 space-y-2 text-sm text-black my-auto">
                    <p className="flex items-center gap-2">
                      <FaBullseye className="text-[#821435]" />
                      Goal: QAR {campaign.goalAmount.toLocaleString()}
                    </p>
                    <p className="flex items-center gap-2">
                      <FaCheckCircle className="text-[#543D2E]" />
                      Raised: QAR {campaign.raisedAmount.toLocaleString()}
                    </p>
                    <p className="flex items-center gap-2">
                      <FaCalendarAlt className="text-[#821435]" />
                      {new Date(campaign.startDate).toLocaleDateString()} →{" "}
                      {new Date(campaign.endDate).toLocaleDateString()}
                    </p>
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-auto">
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className="h-3 rounded-full bg-gradient-to-r from-[#821435] to-[#543D2E]"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                    <p className="mt-2 text-sm text-black text-right">
                      {progress.toFixed(1)}% funded
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CampaignCard;
