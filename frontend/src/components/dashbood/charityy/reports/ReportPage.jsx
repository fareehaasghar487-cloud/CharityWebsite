import React, { useState } from "react";
import { CSVLink } from "react-csv";
import { jsPDF } from "jspdf";

import {
  useGetAllReportsQuery,
  useCreateReportMutation,
} from "../../../../../Redux/slices/ReportApi.js";

export default function ReportsPage() {
  const [campaign, setCampaign] = useState("Health Aid");
  const [reportType, setReportType] = useState("Financial");

  // ================= RTK QUERY =================
  const {
    data: reports = [],
    isLoading,
    isError,
  } = useGetAllReportsQuery();

  const [createReport, { isLoading: isCreating }] =
    useCreateReportMutation();

  // ================= GENERATE REPORT =================
  const handleGenerate = async () => {
    try {
      await createReport({
        campaign,
        type: reportType,
      }).unwrap();
    } catch (error) {
      console.error(error);
    }
  };

  // ================= PDF EXPORT =================
  const exportPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Generated Reports", 14, 20);

    let y = 30;
    reports.forEach((r) => {
      doc.text(
        `${r._id} | ${r.campaign} | ${new Date(
          r.generatedOn
        ).toLocaleDateString()} | ${r.type} | ${r.status}`,
        14,
        y
      );
      y += 10;
    });

    doc.save("reports.pdf");
  };

  // ================= UI STATES =================
  if (isLoading) return <p className="p-6">Loading reports...</p>;
  if (isError) return <p className="p-6 text-red-500">Failed to load reports</p>;

  return (
    <div className="p-6 md:p-12 mt-24 bg-gray-50 min-h-screen">


      <h1 className="text-2xl font-bold mb-6">Reports & Compliance</h1>

      {/* ===== Generate New Report ===== */}
      <div className="bg-white shadow rounded-lg p-6 mb-8">
        <h2 className="font-semibold mb-4">Generate New Report</h2>

        <div className="flex flex-col md:flex-row gap-4">
          <select
            className="border p-2 rounded w-full md:w-1/3"
            value={campaign}
            onChange={(e) => setCampaign(e.target.value)}
          >
            <option>Medical Aid for children</option>
            <option>Education for all</option>
            <option>Flood Relief Fund</option>
            <option>Food For Families</option>
            <option>Clean Water Project</option>
            <option>Hunger free drive</option>
          
          </select>

          <select
            className="border p-2 rounded w-full md:w-1/3"
            value={reportType}
            onChange={(e) => setReportType(e.target.value)}
          >
            <option>Financial</option>
            <option>Compliance</option>
          </select>

          <button
            onClick={handleGenerate}
            disabled={isCreating}
            className="bg-[#6b1d1d] text-white px-6 py-2 rounded hover:bg-[#561616] transition w-full md:w-auto"
          >
            {isCreating ? "Generating..." : "Generate"}
          </button>
        </div>
      </div>

      {/* ===== Reports Table ===== */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="font-semibold mb-4">Generated Reports</h2>

        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-[#6b1d1d] text-white">
                <th className="border p-2">Report ID</th>
                <th className="border p-2">Campaign</th>
                <th className="border p-2">Generated On</th>
                <th className="border p-2">Type</th>
                <th className="border p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((r) => (
                <tr key={r._id} className="hover:bg-gray-50">
                  <td className="border p-2">{r._id}</td>
                  <td className="border p-2">{r.campaign}</td>
                  <td className="border p-2">
                    {new Date(r.generatedOn).toLocaleDateString()}
                  </td>
                  <td className="border p-2">{r.type}</td>
                  <td className="border p-2">{r.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 flex gap-4">
          <button
            onClick={exportPDF}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Download PDF
          </button>

          <CSVLink
            data={reports}
            filename={"reports.csv"}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
          >
            Export Excel
          </CSVLink>
        </div>
      </div>
    </div>
  );
}
