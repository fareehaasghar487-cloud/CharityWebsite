import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const donationApi = createApi({
  reducerPath: "donationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://charitywebsite.onrender.com/api",
    credentials: "include", // ✅ important if using cookies auth
  }),
  tagTypes: ["Donations"],
  endpoints: (build) => ({

    // ================= CREATE DONATION =================
    createDonation: build.mutation({
      query: (formData) => ({
        url: "/create-donation",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: [{ type: "Donations", id: "LIST" }],
    }),

    // ================= GET ALL DONATIONS (ADMIN) =================
     getAllDonations: build.query({
  query: ({ confirmation } = {}) => {
    let queryString = "/get-all-donations";
    if (confirmation && confirmation !== "All") {
      queryString += `?confirmation=${confirmation}`;
    }
    return queryString;
  },
  providesTags: (result) =>
    result
      ? [
          ...result.map(({ _id }) => ({ type: "Donations", id: _id })),
          { type: "Donations", id: "LIST" },
        ]
      : [{ type: "Donations", id: "LIST" }],
}),
    // ================= GET MY DONATIONS (USER PROFILE) =================
    getMyDonations: build.query({
      query: () => "/get-user-donation", // 🔑 backend route
      providesTags: [{ type: "Donations", id: "LIST" }],
    }),

    // ================= DELETE DONATION =================
    deleteDonation: build.mutation({
      query: (id) => ({
        url: `/delete-donation/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Donations", id: "LIST" }],
    }),

    // ================= UPDATE DONATION =================
    updateDonation: build.mutation({
      query: ({ id, ...patch }) => ({
        url: `/update-donation/${id}`,
        method: "PUT",
        body: patch,
      }),
      invalidatesTags: [{ type: "Donations", id: "LIST" }],
    }),

  }),
});

export const {
  useCreateDonationMutation,
  useGetAllDonationsQuery,
  useGetMyDonationsQuery, // ✅ export this
  useDeleteDonationMutation,
  useUpdateDonationMutation,
} = donationApi;
