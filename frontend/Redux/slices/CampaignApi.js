import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const campaignApi = createApi({
  reducerPath: "campaignApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://charitywebsite.onrender.com/api",
    credentials: "include", // important if cookies/auth are used
  }),

  tagTypes: ["Campaign"],

  endpoints: (builder) => ({

    // ================= CREATE CAMPAIGN =================
    createCampaign: builder.mutation({
      query: (formData) => ({
        url: "/create-campaign",
        method: "POST",
        body: formData, // FormData for image upload
      }),
      invalidatesTags: ["Campaign"],
    }),

    // ================= GET ALL CAMPAIGNS =================
   getAllCampaigns: builder.query({
      query: () => "/get-all-campaigns", // backend route for campaigns
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ _id }) => ({ type: "Campaign", id: _id })),
              { type: "Campaign", id: "LIST" },
            ]
          : [{ type: "Campaign", id: "LIST" }],
    }),


    // ================= GET SINGLE CAMPAIGN =================
    getCampaignById: builder.query({
      query: (id) => `/get-one-campaign/${id}`,
      providesTags: ["Campaign"],
    }),

    // ================= UPDATE CAMPAIGN =================
    updateCampaign: builder.mutation({
      query: ({ id, formData }) => ({
        url: `/update-campaign/${id}`,
        method: "PUT",
        body: formData, // FormData again (optional image update)
      }),
      invalidatesTags: ["Campaign"],
    }),

    // ================= DELETE CAMPAIGN =================
    deleteCampaign: builder.mutation({
      query: (id) => ({
        url: `/delete-campaign/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Campaign"],
    }),

    // ================= ADD DONATION =================
    addDonation: builder.mutation({
      query: (data) => ({
        url: "/add-donation",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Campaign"],
    }),

  }),
});

export const {
  useCreateCampaignMutation,
  useGetAllCampaignsQuery,
  useGetCampaignByIdQuery,
  useUpdateCampaignMutation,
  useDeleteCampaignMutation,
  useAddDonationMutation,
} = campaignApi;
