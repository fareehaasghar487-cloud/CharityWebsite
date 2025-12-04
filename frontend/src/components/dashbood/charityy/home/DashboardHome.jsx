import React from "react";

export default function DashboardHome() {
  const stats = [
    { title: "My Donations", value: "12" },
    { title: "Active Campaigns", value: "8" },
    { title: "Beneficiaries", value: "1,240" },
    { title: "Registered Charities", value: "36" },
  ];

  const topCampaigns = [
    { name: "Health Aid", amount: "$250K" },
    { name: "Education Fund", amount: "$180K" },
    { name: "Relief Packages", amount: "$95K" },
  ];

  return (
    <div className="w-full p-6 space-y-8">

      {/* ================== TOP STAT CARDS ================== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-md p-6 border border-gray-100"
          >
            <h3 className="text-gray-500 text-sm font-medium">
              {item.title}
            </h3>
            <p className="mt-2 text-3xl font-bold text-[#8A1538]">
              {item.value}
            </p>
          </div>
        ))}
      </div>

      {/* ================== CHARTS + TOP CAMPAIGNS ================== */}
      <div className="flex flex-col lg:flex-row gap-6">

        {/* -------- Charts Section -------- */}
        <div className="flex-1 bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Analytics Overview
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Chart Placeholder 1 */}
            <div className="h-64 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 text-sm">
              Donations Chart
            </div>

            {/* Chart Placeholder 2 */}
            <div className="h-64 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 text-sm">
              Campaign Growth Chart
            </div>
          </div>
        </div>

        {/* -------- Top Campaigns Box -------- */}
        <div className="w-full lg:w-[35%] bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Top Campaigns
          </h2>

          <div className="space-y-4">
            {topCampaigns.map((campaign, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-4 rounded-xl bg-gray-50 border"
              >
                <span className="text-gray-700 font-medium">
                  {campaign.name}
                </span>
                <span className="font-bold text-[#8A1538]">
                  {campaign.amount}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
