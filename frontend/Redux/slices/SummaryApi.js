import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const summaryApi = createApi({
  reducerPath: "summaryApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://charitywebsite.onrender.com/api/" }),
  endpoints: (builder) => ({
    getSummary: builder.query({
      query: () => "summary",
    }),
  }),
});

export const { useGetSummaryQuery } = summaryApi;
