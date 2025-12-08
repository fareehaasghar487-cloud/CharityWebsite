// import React from "react";

// export default function CampaignPage() {
//   const campaigns = [
//     {
//       name: "Health Aid",
//       category: "Medical",
//       goal: "$50,000",
//       raised: "$25,000",
//       status: "Approved",
//     },
//     {
//       name: "Education Fund",
//       category: "Education",
//       goal: "$40,000",
//       raised: "$18,500",
//       status: "Pending",
//     },
//   ];

//   return (
//     <div className="w-full bg-white rounded-2xl shadow-md p-6">
//       <h2 className="text-2xl font-bold text-gray-800 mb-6">
//         Existing Campaigns
//       </h2>

//       <div className="overflow-x-auto">
//         <table className="w-full border-collapse">
//           <thead>
//             <tr className="bg-gray-100 text-left text-sm text-gray-700">
//               <th className="p-3">Campaign</th>
//               <th className="p-3">Category</th>
//               <th className="p-3">Goal</th>
//               <th className="p-3">Raised</th>
//               <th className="p-3">Status</th>
//             </tr>
//           </thead>

//           <tbody>
//             {campaigns.map((item, i) => (
//               <tr key={i} className="border-b text-sm hover:bg-gray-50">
//                 <td className="p-3 font-medium">{item.name}</td>
//                 <td className="p-3">{item.category}</td>
//                 <td className="p-3 font-semibold">{item.goal}</td>
//                 <td className="p-3 font-semibold">{item.raised}</td>
//                 <td className="p-3">
//                   <span
//                     className={`px-3 py-1 rounded-full text-xs font-semibold
//                       ${item.status === "Approved" && "bg-green-100 text-green-700"}
//                       ${item.status === "Pending" && "bg-yellow-100 text-yellow-700"}
//                     `}
//                   >
//                     {item.status}
//                   </span>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }
import React, { useState, useEffect } from "react";
import axios from "axios";

const ManageCampaigns = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Medical");
  const [goalAmount, setGoalAmount] = useState("");
  const [campaigns, setCampaigns] = useState([]);

  const fetchCampaigns = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/campaign/");
      setCampaigns(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCampaigns();
  }, []);

  const handleCreateCampaign = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/campaign/create", {
        title,
        category,
        goalAmount,
      });

      setTitle("");
      setGoalAmount("");
      fetchCampaigns();
      alert("Campaign Created!");
    } catch (error) {
      console.log(error);
      alert("Error creating campaign");
    }
  };

  return (
    <div className="min-h-screen bg-[#f4efeb] p-6 md:p-12">
      {/* Page Title */}
      <h1 className="text-3xl font-semibold mb-6">Manage Campaigns</h1>

      {/* Create Campaign Card */}
      <div className="bg-white shadow p-6 rounded-xl mb-10">
        <h2 className="text-xl font-semibold mb-5">Create New Campaign</h2>

        <form onSubmit={handleCreateCampaign}>
          {/* Campaign Name */}
          <label className="font-medium">Campaign Name</label>
          <input
            type="text"
            placeholder="e.g. Food Relief Program"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full mt-1 mb-4 p-3 border border-gray-300 rounded-lg"
            required
          />

          {/* Category */}
          <label className="font-medium">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full mt-1 mb-4 p-3 border border-gray-300 rounded-lg bg-white"
          >
            <option>Medical</option>
            <option>Food</option>
            <option>Education</option>
            <option>Emergency</option>
          </select>

          {/* Goal Amount */}
          <label className="font-medium">Goal Amount</label>
          <input
            type="number"
            placeholder="50000"
            value={goalAmount}
            onChange={(e) => setGoalAmount(e.target.value)}
            className="w-full mt-1 mb-4 p-3 border border-gray-300 rounded-lg"
            required
          />

          {/* Button */}
          <button
            type="submit"
            className="px-6 py-3 bg-[#6b1d1d] text-white rounded-lg hover:bg-[#561616] transition"
          >
            Create Campaign
          </button>
        </form>
      </div>

      {/* Existing Campaigns */}
      <div className="bg-white shadow p-6 rounded-xl">
        <h2 className="text-xl font-semibold mb-5">Existing Campaigns</h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            {/* Table Header */}
            <thead>
              <tr className="bg-[#6b1d1d] text-white text-left">
                <th className="py-3 px-4">Campaign</th>
                <th className="py-3 px-4">Category</th>
                <th className="py-3 px-4">Goal</th>
                <th className="py-3 px-4">Raised</th>
                <th className="py-3 px-4">Status</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {campaigns.map((c) => (
                <tr
                  key={c._id}
                  className="border-b border-gray-200 hover:bg-gray-50"
                >
                  <td className="py-3 px-4">{c.title}</td>
                  <td className="py-3 px-4">{c.category}</td>
                  <td className="py-3 px-4">{c.goalAmount}</td>
                  <td className="py-3 px-4">{c.raisedAmount}</td>
                  <td className="py-3 px-4">
                    {c.raisedAmount >= c.goalAmount ? (
                      <span className="text-green-600 font-medium">
                        Completed
                      </span>
                    ) : (
                      <span className="text-red-600 font-medium">Active</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {campaigns.length === 0 && (
            <p className="text-center py-5 text-gray-500">
              No campaigns created yet.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageCampaigns;
