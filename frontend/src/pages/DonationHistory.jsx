import { useGetMyDonationsQuery } from "../../Redux/slices/DonationApi.js";
import { FaDonate, FaRegCalendarAlt } from "react-icons/fa";

const DonationHistory = () => {
  const { data: donations = [], isLoading } = useGetMyDonationsQuery();

  if (isLoading) {
    return (
      <p className="text-center mt-20 text-lg font-medium text-gray-600">
        Loading your donations...
      </p>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-24 px-4 md:px-16 bg-gray-50">
      <h2 className="text-3xl font-bold mb-10 text-center text-[#821435]">
        My Donation History
      </h2>

      {donations.length === 0 ? (
        <p className="text-center text-gray-500 text-lg mt-16">
          You haven’t made any donations yet 💙
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {donations.map((d) => (
            <div
              key={d._id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-200 p-6 flex flex-col justify-between"
            >
              {/* Top */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-[#493528] font-semibold">
                    <FaDonate />
                    <span>{d.subject}</span>
                  </div>

                  {/* Status */}
                  <span
                    className={`px-3 py-1 text-xs font-semibold rounded-full
                      ${
                        d.confirmation === "Confirmed"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }
                    `}
                  >
                    {d.confirmation || "Pending"}
                  </span>
                </div>

                {/* Amount */}
                <p className="text-2xl font-bold text-gray-800">
                  QAR {d.price?.toLocaleString()}
                </p>

                {/* Message */}
                {d.message && (
                  <p className="text-gray-600 mt-3 line-clamp-3">
                    {d.message}
                  </p>
                )}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between mt-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <FaRegCalendarAlt />
                  <span>
                    {new Date(d.createdAt || d.date).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DonationHistory;
