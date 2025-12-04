import React, { useState } from "react";

export default function MyDonations() {
  const [filter, setFilter] = useState("All");

  const donations = [
    {
      id: "TXN-1001",
      donor: "Qatar Airways",
      campaign: "Education for All",
      amount: "500,000 QAR",
      method: "Bank Transfer",
      date: "30-Aug-2025",
      status: "Completed",
    },
    {
      id: "TXN-1002",
      donor: "Mohammed Abdullah",
      campaign: "Orphan Support",
      amount: "10,000 QAR",
      method: "Credit Card",
      date: "28-Aug-2025",
      status: "Pending",
    },
    {
      id: "TXN-1003",
      donor: "Vodafone Qatar",
      campaign: "Healthcare Aid",
      amount: "1,200,000 QAR",
      method: "Mobile Wallet",
      date: "15-Aug-2025",
      status: "Completed",
    },
    {
      id: "TXN-1004",
      donor: "Fatima Zahra",
      campaign: "Food Distribution",
      amount: "2,000 QAR",
      method: "Debit Card",
      date: "01-Sep-2025",
      status: "Failed",
    },
  ];

  const filteredData =
    filter === "All"
      ? donations
      : donations.filter((item) => item.status === filter);

  return (
    <div className="w-full bg-white rounded-2xl shadow-md p-6">

      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Donations
      </h2>

      <h3 className="text-lg font-semibold text-gray-700 mb-4">
        Donation Transactions
      </h3>

      <div className="flex flex-wrap gap-3 mb-6">
        <button
          onClick={() => setFilter("All")}
          className={`px-4 py-2 rounded-lg text-sm font-medium border 
          ${filter === "All"
              ? "bg-[#8A1538] text-white"
              : "bg-white text-gray-700"
            }`}
        >
          Show All
        </button>

        <button
          onClick={() => setFilter("Completed")}
          className={`px-4 py-2 rounded-lg text-sm font-medium border 
          ${filter === "Completed"
              ? "bg-green-600 text-white"
              : "bg-white text-gray-700"
            }`}
        >
          Show Completed
        </button>

        <button
          onClick={() => setFilter("Pending")}
          className={`px-4 py-2 rounded-lg text-sm font-medium border 
          ${filter === "Pending"
              ? "bg-yellow-500 text-white"
              : "bg-white text-gray-700"
            }`}
        >
          Show Pending
        </button>

        <button
          onClick={() => setFilter("Failed")}
          className={`px-4 py-2 rounded-lg text-sm font-medium border 
          ${filter === "Failed"
              ? "bg-red-600 text-white"
              : "bg-white text-gray-700"
            }`}
        >
          Show Failed
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left text-sm text-gray-700">
              <th className="p-3">Txn ID</th>
              <th className="p-3">Donor Name</th>
              <th className="p-3">Campaign</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Payment Method</th>
              <th className="p-3">Date</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {filteredData.map((item, i) => (
              <tr
                key={i}
                className="border-b text-sm hover:bg-gray-50 transition"
              >
                <td className="p-3 font-medium">{item.id}</td>
                <td className="p-3">{item.donor}</td>
                <td className="p-3">{item.campaign}</td>
                <td className="p-3 font-semibold">{item.amount}</td>
                <td className="p-3">{item.method}</td>
                <td className="p-3">{item.date}</td>
                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold
                      ${item.status === "Completed" && "bg-green-100 text-green-700"}
                      ${item.status === "Pending" && "bg-yellow-100 text-yellow-700"}
                      ${item.status === "Failed" && "bg-red-100 text-red-700"}
                    `}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}

            {filteredData.length === 0 && (
              <tr>
                <td colSpan="7" className="p-6 text-center text-gray-500">
                  No transactions found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

    </div>
  );
}
