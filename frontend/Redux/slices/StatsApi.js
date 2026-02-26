import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const statsApi = createApi({
  reducerPath: "statsApi",
  // baseQuery: fetchBaseQuery({ baseUrl: "https://charitywebsite.onrender.com" }), 
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (builder) => ({
    getBeneficiariesCount: builder.query({
      query: () => "/beneficiaries/count",
    }),
    getCharitiesCount: builder.query({
      query: () => "/charities/count",
    }),
  }),
});

export const { useGetBeneficiariesCountQuery, useGetCharitiesCountQuery } = statsApi;
