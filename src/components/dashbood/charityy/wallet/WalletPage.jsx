import React from "react";

export default function WalletPage() {
  const transactions = [
    {
      campaign: "Health Aid",
      source: "Bank Transfer",
      amount: "25,000 QAR",
      pending: "No",
      status: "Completed",
      date: "02-Sep-2025",
    },
    {
      campaign: "Education Fund",
      source: "Credit Card",
      amount: "8,000 QAR",
      pending: "Yes",
      status: "Pending",
      date: "01-Sep-2025",
    },
    {
      campaign: "Food Distribution",
      source: "Mobile Wallet",
      amount: "3,500 QAR",
      pending: "No",
      status: "Completed",
      date: "28-Aug-2025",
    },
    {
      campaign: "Orphan Support",
      source: "Debit Card",
      amount: "2,000 QAR",
      pending: "Yes",
      status: "Failed",
      date: "26-Aug-2025",
    },
  ];

  return (
    <div className="w-full bg-white rounded-2xl shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        My Wallet & Donations
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-sm text-gray-700 text-left">
              <th className="p-3">Campaign</th>
              <th className="p-3">Payment Source</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Pending</th>
              <th className="p-3">Status</th>
              <th className="p-3">Date</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((item, i) => (
              <tr key={i} className="border-b text-sm hover:bg-gray-50">
                <td className="p-3 font-medium">{item.campaign}</td>
                <td className="p-3">{item.source}</td>
                <td className="p-3 font-semibold">{item.amount}</td>
                <td className="p-3">{item.pending}</td>
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
                <td className="p-3">{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
