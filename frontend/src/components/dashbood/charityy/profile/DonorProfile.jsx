import React from "react";

export default function DonorProfile() {
  const donor = {
    name: "Mohammed Abdullah",
    email: "mohammed@gmail.com",
    phone: "+974 5555 1234",
    donations: 12,
    campaignsSupported: 5,
    totalAmount: "QAR 1,780,000",
    joinedDate: "01-Jan-2024",
    profileImg: "https://i.pravatar.cc/150?img=3",
  };

  return (
    <div className="w-full min-h-screen bg-[#F2EDE9] p-6">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 text-center md:text-left">
        Donor Profile
      </h2>

      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
        {/* Left Column: Profile Info */}
        <div className="md:w-1/3 bg-gradient-to-b from-[#8A1538] to-[#B62F5E] flex flex-col items-center p-8">
          <img
            src={donor.profileImg}
            alt={donor.name}
            className="w-36 h-36 rounded-full border-4 border-white shadow-lg mb-6 object-cover"
          />
          <h3 className="text-xl md:text-2xl font-semibold text-white">{donor.name}</h3>
          <p className="text-white/80 mt-1">{donor.email}</p>
          <p className="text-white/80 mt-1">{donor.phone}</p>
          <p className="text-white/80 mt-1">Joined: {donor.joinedDate}</p>
        </div>

        {/* Right Column: Stats */}
        <div className="md:w-2/3 p-8 flex flex-col gap-6">
          <h4 className="text-2xl font-semibold text-gray-800 mb-4">Account Statistics</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Donations */}
            <div className="bg-[#FFE5E5] text-[#8A1538] p-6 rounded-2xl shadow-md hover:shadow-xl transition flex flex-col items-center">
              <p className="text-3xl font-bold">{donor.donations}</p>
              <p className="text-sm mt-2">Donations</p>
            </div>

            {/* Campaigns Supported */}
            <div className="bg-[#FFD6E0] text-[#B62F5E] p-6 rounded-2xl shadow-md hover:shadow-xl transition flex flex-col items-center">
              <p className="text-3xl font-bold">{donor.campaignsSupported}</p>
              <p className="text-sm mt-2">Campaigns Supported</p>
            </div>

            {/* Total Donated */}
            <div className="bg-[#FFC1D1] text-[#821435] p-6 rounded-2xl shadow-md hover:shadow-xl transition flex flex-col items-center">
              <p className="text-3xl font-bold">{donor.totalAmount}</p>
              <p className="text-sm mt-2">Total Donated</p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-6 bg-gray-50 p-6 rounded-2xl shadow-inner">
            <h5 className="text-xl font-semibold text-gray-700 mb-3">Additional Information</h5>
            <p className="text-gray-600">
              Mohammed has been an active donor supporting multiple campaigns including healthcare, education, and relief initiatives. His contributions have significantly impacted local communities and charitable organizations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
