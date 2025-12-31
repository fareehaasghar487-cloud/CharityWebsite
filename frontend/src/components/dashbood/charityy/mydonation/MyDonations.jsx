import React, { useState } from "react";
import {
  useGetAllDonationsQuery,
  useDeleteDonationMutation,
  useUpdateDonationMutation,
} from "../../../../../Redux/slices/DonationApi.js";
import { FaTrash } from "react-icons/fa";
import toast from "react-hot-toast";

export default function MyDonations() {
  const [filter, setFilter] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [selectedDonation, setSelectedDonation] = useState(null);

  // ================= RTK QUERY =================
  const {
    data: donations = [],
    isLoading,
    isError,
    refetch, // 🔑 allows manual refetch
  } = useGetAllDonationsQuery(
    { confirmation: filter },
    { refetchOnMountOrArgChange: true }
  );

  const [deleteDonation] = useDeleteDonationMutation();
  const [updateDonation] = useUpdateDonationMutation();

  // ================= DELETE HANDLER =================
  const confirmDelete = (donation) => {
    setSelectedDonation(donation);
    setShowModal(true);
  };

  const handleDelete = async () => {
    if (!selectedDonation) return;
    try {
      await deleteDonation(selectedDonation._id).unwrap();
      toast.success("Donation deleted successfully!");
      refetch(); // 🔄 Refetch to dynamically update list
    } catch (err) {
      console.error(err);
      toast.error("Failed to delete donation.");
    } finally {
      setShowModal(false);
      setSelectedDonation(null);
    }
  };

  // ================= UPDATE STATUS =================
  const handleStatusChange = async (id, newStatus) => {
    try {
      await updateDonation({ id, confirmation: newStatus }).unwrap();
      toast.success("Donation status updated successfully!");
      refetch(); // 🔄 Refetch to dynamically update list
    } catch (err) {
      console.error(err);
      toast.error("Failed to update donation.");
    }
  };

  if (isLoading) return <p className="p-6">Loading donations...</p>;
  if (isError) return <p className="p-6 text-red-500">Failed to load donations</p>;

  return (
    <div className="w-full pt-28 p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">Donations</h2>

      {/* ===== Filter Buttons ===== */}
      <div className="flex flex-wrap gap-3 mb-6">
        {["All", "Pending", "Confirmed"].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-4 py-2 rounded-lg border ${
              filter === status ? "bg-[#8A1538] text-white" : "bg-white text-gray-700"
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      {/* ===== Donations Table ===== */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left text-sm text-gray-700">
              <th className="p-3">Txn ID</th>
              <th className="p-3">Donor Name</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Status</th>
              <th className="p-3">Date</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
  {donations.length > 0 ? (
    donations.map((item) => (
      <tr key={item._id} className="border-b text-sm hover:bg-gray-50">
        <td className="p-3">{item._id}</td>
        <td className="p-3">{item.fullName}</td>
        <td className="p-3">{item.price}</td>
        <td className="p-3">
          <select
            value={item.confirmation}
            onChange={(e) => handleStatusChange(item._id, e.target.value)}
            className="border rounded px-2 py-1"
          >
            <option value="Pending">Pending</option>
            <option value="Confirmed">Confirmed</option>
          </select>
        </td>
        <td className="p-3">{new Date(item.date).toLocaleDateString()}</td>
        <td className="p-3 flex items-center gap-3">
          <button
            onClick={() => confirmDelete(item)}
            className="text-red-600 hover:text-red-800"
          >
            <FaTrash />
          </button>
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="7" className="p-6 text-center text-gray-500">
        No donations found.
      </td>
    </tr>
  )}
</tbody>

        </table>
      </div>

      {/* ===== Confirmation Modal ===== */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 backdrop-blur-sm bg-black/20"
            onClick={() => setShowModal(false)}
          ></div>

          <div
            className="relative bg-white rounded-xl shadow-2xl p-6 w-96 max-w-full transform transition-all duration-200 scale-100 opacity-100"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Confirm Delete</h3>
            <p className="mb-6 text-gray-600">
              Are you sure you want to delete the donation by <strong>{selectedDonation?.fullName}</strong>?
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-5 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition"
              >
                No
              </button>
              <button
                onClick={handleDelete}
                className="px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

