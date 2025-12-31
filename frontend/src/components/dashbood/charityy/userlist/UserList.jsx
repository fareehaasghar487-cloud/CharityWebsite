import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import {
  useGetAllUsersQuery,
  useUpdateUserRoleMutation,
  useDeleteUserMutation,
} from "../../../../../Redux/slices/UserApi.js";

const UsersList = () => {
  const { data: users, isLoading, error, refetch } = useGetAllUsersQuery();
  const [updateRole] = useUpdateUserRoleMutation();
  const [deleteUser] = useDeleteUserMutation();

  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(""); // "delete" or "role"
  const [selectedUser, setSelectedUser] = useState(null);
  const [newRole, setNewRole] = useState("");

  // Disable background scroll when modal is open
  useEffect(() => {
    if (showModal) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [showModal]);

  if (isLoading)
    return <p className="text-center mt-10">Loading users...</p>;
  if (error)
    return <p className="text-red-500 text-center mt-10">Failed to load users</p>;

  const openRoleModal = (user, role) => {
    setSelectedUser(user);
    setNewRole(role);
    setModalType("role");
    setShowModal(true);
  };

  const openDeleteModal = (user) => {
    setSelectedUser(user);
    setModalType("delete");
    setShowModal(true);
  };

  const handleConfirm = async () => {
    try {
      if (modalType === "role") {
        await updateRole({ id: selectedUser._id, role: newRole }).unwrap();
        toast.success("Role updated successfully");
      } else if (modalType === "delete") {
        await deleteUser(selectedUser._id).unwrap();
        toast.success("User deleted successfully");
      }
      setShowModal(false);
      setSelectedUser(null);
      setNewRole("");
      refetch(); // refresh list after modal closes
    } catch (err) {
      toast.error(err?.data?.message || "Action failed");
      setShowModal(false);
    }
  };

  return (
    <div className="mt-20 px-6">
      <h1 className="text-2xl font-bold mb-6 text-[#543D2E]">All Users</h1>

      <div className="overflow-x-auto shadow-lg rounded-lg border border-[#543D2E30]">
        <table className="w-full text-left">
          <thead className="bg-[#82143520]">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Role</th>
              
              <th className="p-3">Verification</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => (
              <tr key={user._id} className="border-b hover:bg-[#543D2E08]">
                <td className="p-3">{user.name}</td>
                <td className="p-3">{user.email}</td>

                {/* Role Dropdown */}
                <td className="p-3">
                  <select
                    value={user.role || "User"}
                    onChange={(e) => openRoleModal(user, e.target.value)}
                    className="border rounded px-2 py-1"
                  >
                    <option value="User">User</option>
                    <option value="Admin">Admin</option>
                  </select>
                </td>

                {/* Verification */}
                <td className="p-3">
                  {user.isVerified ? (
                    <span className="text-green-600 font-semibold">Verified</span>
                  ) : (
                    <span className="text-red-600 font-semibold">Not Verified</span>
                  )}
                </td>

                {/* Actions */}
                <td className="p-3">
                  <button
                    onClick={() => openDeleteModal(user)}
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Blur background */}
          <div className="absolute inset-0 backdrop-blur-sm bg-black/20"></div>

          {/* Modal content */}
          <div className="relative bg-white rounded-lg p-6 max-w-sm w-full shadow-lg z-10">
            <h2 className="text-xl font-bold mb-4">
              {modalType === "role" ? "Confirm Role Update" : "Confirm Delete"}
            </h2>
            <p className="mb-6 text-gray-700">
              {modalType === "role"
                ? `Are you sure you want to change ${selectedUser.name}'s role to "${newRole}"?`
                : `Are you sure you want to delete ${selectedUser.name}?`}
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirm}
                className="px-4 py-2 bg-[#821435] text-white rounded hover:bg-[#543D2E]"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UsersList;
