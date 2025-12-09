import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const campaignApi = createApi({
    reducerPath: "campaignApi",
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),

    endpoints: (build) => ({

        // CREATE CAMPAIGN
        createCampaign: build.mutation({
            query: (formData) => ({
                url: "/create-campaign",
                method: "POST",
                body: formData,
            }),
        }),

        // GET ALL CAMPAIGNS
        getAllCampaigns: build.query({
            query: () => "/get-all-campaigns",
        }),

        // GET ONE CAMPAIGN
        getCampaignById: build.query({
            query: (id) => `/get-one-campaign/${id}`,
        }),

        // UPDATE CAMPAIGN
        updateCampaign: build.mutation({
            query: ({ id, data }) => ({
                url: `/update-campaign/${id}`,
                method: "PUT",
                body: data,
            }),
        }),

        // DELETE CAMPAIGN
        deleteCampaign: build.mutation({
            query: (id) => ({
                url: `/delete-campaign/${id}`,
                method: "DELETE",
            }),
        }),

    }),
});

export const {
    useCreateCampaignMutation,
    useGetAllCampaignsQuery,
    useGetCampaignByIdQuery,
    useUpdateCampaignMutation,
    useDeleteCampaignMutation,
} = campaignApi;
