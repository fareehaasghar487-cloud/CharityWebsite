import React, { useState } from "react";

const CampaignPage = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Medical");
  const [goalAmount, setGoalAmount] = useState("");

  // Dummy campaigns list (local state)
  const [campaigns, setCampaigns] = useState([]);

  const handleCreateCampaign = (e) => {
    e.preventDefault();

    const newCampaign = {
      _id: Date.now(),
      title,
      category,
      goalAmount,
      raisedAmount: 0,
    };

    setCampaigns([...campaigns, newCampaign]);

    setTitle("");
    setGoalAmount("");

    alert("Campaign Created!");
  };

  return (
    <div className="min-h-screen bg-[#f4efeb] p-6 md:p-12">
      <h1 className="text-3xl font-semibold mb-6">Manage Campaigns</h1>

      {/* Create Campaign */}
      <div className="bg-white shadow p-6 rounded-xl mb-10">
        <h2 className="text-xl font-semibold mb-5">Create New Campaign</h2>

        <form onSubmit={handleCreateCampaign}>
          <label className="font-medium">Campaign Name</label>
          <input
            type="text"
            placeholder="e.g. Food Relief Program"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full mt-1 mb-4 p-3 border border-gray-300 rounded-lg"
            required
          />

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

          <label className="font-medium">Goal Amount</label>
          <input
            type="number"
            placeholder="50000"
            value={goalAmount}
            onChange={(e) => setGoalAmount(e.target.value)}
            className="w-full mt-1 mb-4 p-3 border border-gray-300 rounded-lg"
            required
          />

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
            <thead>
              <tr className="bg-[#6b1d1d] text-white text-left">
                <th className="py-3 px-4">Campaign</th>
                <th className="py-3 px-4">Category</th>
                <th className="py-3 px-4">Goal</th>
                <th className="py-3 px-4">Raised</th>
                <th className="py-3 px-4">Status</th>
              </tr>
            </thead>

            <tbody>
              {campaigns.map((c) => (
                <tr key={c._id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-3 px-4">{c.title}</td>
                  <td className="py-3 px-4">{c.category}</td>
                  <td className="py-3 px-4">{c.goalAmount}</td>
                  <td className="py-3 px-4">{c.raisedAmount}</td>
                  <td className="py-3 px-4">
                    {c.raisedAmount >= c.goalAmount ? (
                      <span className="text-green-600 font-medium">Completed</span>
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

export default CampaignPage;
