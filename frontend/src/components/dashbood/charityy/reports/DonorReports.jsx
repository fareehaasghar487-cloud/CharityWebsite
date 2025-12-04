import React from "react";

export default function DonorReports() {
  const summary = [
    { title: "Total Donations", value: "1,247,000 QAR" },
    { title: "Completed Donations", value: "985,000 QAR" },
    { title: "Pending Donations", value: "92,000 QAR" },
    { title: "Active Campaigns", value: "6" },
  ];

  const reports = [
    {
      id: "REP-1001",
      campaign: "Health Aid",
      donated: "250,000 QAR",
      utilized: "210,000 QAR",
      beneficiaries: "1,250",
      status: "Verified",
      date: "01-Sep-2025",
    },
    {
      id: "REP-1002",
      campaign: "Education Fund",
      donated: "180,000 QAR",
      utilized: "95,000 QAR",
      beneficiaries: "620",
      status: "In Progress",
      date: "28-Aug-2025",
    },
    {
      id: "REP-1003",
      campaign: "Orphan Support",
      donated: "75,000 QAR",
      utilized: "75,000 QAR",
      beneficiaries: "310",
      status: "Verified",
      date: "20-Aug-2025",
    },
    {
      id: "REP-1004",
      campaign: "Food Distribution",
      donated: "42,000 QAR",
      utilized: "30,000 QAR",
      beneficiaries: "540",
      status: "Pending",
      date: "12-Aug-2025",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#F2EDE9] p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Donation Reports
      </h2>

      <div className="grid md:grid-cols-4 gap-6 mb-10">
        {summary.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-md p-6 text-center"
          >
            <p className="text-sm text-gray-500">{item.title}</p>
            <h3 className="text-2xl font-bold text-[#8A1538] mt-2">
              {item.value}
            </h3>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl shadow-md p-6 overflow-x-auto">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Detailed Reports
        </h3>

        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-sm text-gray-700 text-left">
              <th className="p-3">Report ID</th>
              <th className="p-3">Campaign</th>
              <th className="p-3">Amount Donated</th>
              <th className="p-3">Utilized</th>
              <th className="p-3">Beneficiaries</th>
              <th className="p-3">Status</th>
              <th className="p-3">Date</th>
            </tr>
          </thead>

          <tbody>
            {reports.map((item, i) => (
              <tr
                key={i}
                className="border-b text-sm hover:bg-gray-50 transition"
              >
                <td className="p-3 font-medium">{item.id}</td>
                <td className="p-3 font-semibold">{item.campaign}</td>
                <td className="p-3">{item.donated}</td>
                <td className="p-3">{item.utilized}</td>
                <td className="p-3">{item.beneficiaries}</td>
                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold
                      ${item.status === "Verified" && "bg-green-100 text-green-700"}
                      ${item.status === "In Progress" && "bg-blue-100 text-blue-700"}
                      ${item.status === "Pending" && "bg-yellow-100 text-yellow-700"}
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
