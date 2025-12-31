import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { FaEdit, FaTrash } from "react-icons/fa";
import {
  useCreateCampaignMutation,
  useGetAllCampaignsQuery,
  useUpdateCampaignMutation,
  useDeleteCampaignMutation,
} from "../../../../../Redux/slices/CampaignApi";

const CampaignPage = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Medical");
  const [goalAmount, setGoalAmount] = useState("");
  const [raisedAmount, setRaisedAmount] = useState(0);
  const [status, setStatus] = useState("Pending");
  const [startDate, setStartDate] = useState(new Date().toISOString().split("T")[0]);
  const [endDate, setEndDate] = useState(new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split("T")[0]);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [editId, setEditId] = useState(null);

  const { data: campaigns = [], refetch } = useGetAllCampaignsQuery();
  const [createCampaign, { isLoading }] = useCreateCampaignMutation();
  const [updateCampaign] = useUpdateCampaignMutation();
  const [deleteCampaign] = useDeleteCampaignMutation();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !goalAmount) {
      toast.error("Please fill all required fields");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("category", category);
      formData.append("goalAmount", goalAmount);
      formData.append("raisedAmount", raisedAmount);
      formData.append("status", status);
      formData.append("startDate", startDate);
      formData.append("endDate", endDate);
      formData.append("description", description);
      if (image) formData.append("image", image);

      if (editId) {
        await updateCampaign({ id: editId, formData }).unwrap();

        toast.success("Campaign updated!");
        setEditId(null);
      } else {
        console.log(formData)
        const data = await createCampaign(formData).unwrap();
        console.log(data)
        toast.success("Campaign created!");
      }

      // reset form
      setTitle("");
      setCategory("Medical");
      setGoalAmount("");
      setRaisedAmount(0);
      setStatus("Pending");
      setStartDate(new Date().toISOString().split("T")[0]);
      setEndDate(new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split("T")[0]);
      setDescription("");
      setImage(null);
      setPreview(null);

      refetch();
    } catch (error) {
      console.error(error);
      toast.error(error?.data?.message || "Failed to save campaign");
    }
  };

  const handleEdit = (c) => {
    setEditId(c._id);
    setTitle(c.title);
    setCategory(c.category);
    setGoalAmount(c.goalAmount);
    setRaisedAmount(c.raisedAmount);
    setStatus(c.status);
    setStartDate(c.startDate.split("T")[0]);
    setEndDate(c.endDate.split("T")[0]);
    setDescription(c.description);
    setPreview(c.image);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this campaign?")) return;

    try {
      await deleteCampaign(id).unwrap();
      toast.success("Campaign deleted successfully");
      refetch();
    } catch (error) {
      toast.error("Failed to delete campaign");
    }
  };

  return (
    <div className="min-h-screen bg-[#f4efeb] p-6 md:p-12 mt-24">
      <h1 className="text-3xl font-semibold mb-6">Manage Campaigns</h1>

      {/* Create/Edit Form */}
      <div className="bg-white shadow p-6 rounded-xl mb-10">
        <h2 className="text-xl font-semibold mb-5">{editId ? "Edit Campaign" : "Create New Campaign"}</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Campaign Name" value={title} onChange={e => setTitle(e.target.value)} className="w-full p-3 mb-4 border rounded" />
          <select value={category} onChange={e => setCategory(e.target.value)} className="w-full p-3 mb-4 border rounded">
            <option>Medical</option>
            <option>Food</option>
            <option>Education</option>
            <option>Emergency</option>
            <option>Health</option>
            <option>Releif</option>
            <option>Hunger</option>
            <option>Enviroment</option>
          </select>
          <input type="number" placeholder="Goal Amount" value={goalAmount} onChange={e => setGoalAmount(e.target.value)} className="w-full p-3 mb-4 border rounded" />
          <input type="number" placeholder="Raised Amount" value={raisedAmount} onChange={e => setRaisedAmount(e.target.value)} className="w-full p-3 mb-4 border rounded" />
          <select value={status} onChange={e => setStatus(e.target.value)} className="w-full p-3 mb-4 border rounded">
            <option>Pending</option>
            <option>Active</option>
            <option>Completed</option>
          </select>
          <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} className="w-full p-3 mb-4 border rounded" />
          <input type="date" value={endDate} onChange={e => setEndDate(e.target.value)} className="w-full p-3 mb-4 border rounded" />
          <textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} className="w-full p-3 mb-4 border rounded" />
          <input type="file" accept="image/*" onChange={handleImageChange} className="w-full p-3 mb-2 border rounded" />
          {preview && <img src={preview} alt="Preview" className="w-32 h-32 object-cover rounded mb-4" />}
          <button type="submit" disabled={isLoading} className="px-6 py-3 bg-[#6b1d1d] text-white rounded hover:bg-[#561616]">{editId ? "Update" : "Create"}</button>
        </form>
      </div>

      {/* Campaigns Table */}
      <div className="bg-white shadow p-6 rounded-xl overflow-x-auto">
        <h2 className="text-xl font-semibold mb-5">Existing Campaigns</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#6b1d1d] text-white">
              <th className="p-3">Image</th>
              <th className="p-3">Title</th>
              <th className="p-3">Category</th>
              <th className="p-3">Goal</th>
              <th className="p-3">Raised</th>
              <th className="p-3">Status</th>
              <th className="p-3">Start</th>
              <th className="p-3">End</th>
              <th className="p-3">Description</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map(c => (
              <tr key={c._id} className="border-b hover:bg-gray-50">
                <td className="p-3">{c.image ? <img src={c.image} alt={c.title} className="w-20 h-20 object-cover rounded" /> : "No Image"}</td>
                <td className="p-3">{c.title}</td>
                <td className="p-3">{c.category}</td>
                <td className="p-3">{c.goalAmount}</td>
                <td className="p-3">{c.raisedAmount}</td>
                <td className={`p-3 ${c.status === "Completed" ? "text-green-600" : c.status === "Active" ? "text-blue-600" : "text-yellow-600"}`}>{c.status}</td>
                <td className="p-3">{new Date(c.startDate).toLocaleDateString()}</td>
                <td className="p-3">{new Date(c.endDate).toLocaleDateString()}</td>
                <td className="p-3">{c.description}</td>
                <td className="p-3 flex gap-2">
                  <button onClick={() => handleEdit(c)} className="text-blue-600 hover:text-blue-800"><FaEdit /></button>
                  <button onClick={() => handleDelete(c._id)} className="text-red-600 hover:text-red-800"><FaTrash /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {campaigns.length === 0 && <p className="text-center py-5 text-gray-500">No campaigns created yet.</p>}
      </div>
    </div>
  );
};

export default CampaignPage;
