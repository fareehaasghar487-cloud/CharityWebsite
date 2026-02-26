import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const summaryApi = createApi({
  reducerPath: "summaryApi",
  // baseQuery: fetchBaseQuery({ baseUrl: "https://charitywebsite.onrender.com/api/" }),
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/" }),
  endpoints: (builder) => ({
    getSummary: builder.query({
      query: () => "summary",
    }),
  }),
});

export const { useGetSummaryQuery } = summaryApi;
