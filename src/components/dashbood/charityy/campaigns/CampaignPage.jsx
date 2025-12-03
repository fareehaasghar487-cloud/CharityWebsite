import React from "react";

export default function CampaignPage() {
  const campaigns = [
    {
      name: "Health Aid",
      category: "Medical",
      goal: "$50,000",
      raised: "$25,000",
      status: "Approved",
    },
    {
      name: "Education Fund",
      category: "Education",
      goal: "$40,000",
      raised: "$18,500",
      status: "Pending",
    },
  ];

  return (
    <div className="w-full bg-white rounded-2xl shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Existing Campaigns
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left text-sm text-gray-700">
              <th className="p-3">Campaign</th>
              <th className="p-3">Category</th>
              <th className="p-3">Goal</th>
              <th className="p-3">Raised</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {campaigns.map((item, i) => (
              <tr key={i} className="border-b text-sm hover:bg-gray-50">
                <td className="p-3 font-medium">{item.name}</td>
                <td className="p-3">{item.category}</td>
                <td className="p-3 font-semibold">{item.goal}</td>
                <td className="p-3 font-semibold">{item.raised}</td>
                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold
                      ${item.status === "Approved" && "bg-green-100 text-green-700"}
                      ${item.status === "Pending" && "bg-yellow-100 text-yellow-700"}
                    `}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
