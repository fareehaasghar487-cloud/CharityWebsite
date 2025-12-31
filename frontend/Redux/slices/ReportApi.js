import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const reportApi = createApi({
  reducerPath: "reportApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://charitywebsite.onrender.com",
    credentials: "include",
  }),

  tagTypes: ["Report"],

  endpoints: (builder) => ({

    // ================= CREATE REPORT =================
    createReport: builder.mutation({
      query: (data) => ({
        url: "/create-report",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Report"],
    }),

    // ================= GET ALL REPORTS =================
    getAllReports: builder.query({
      query: () => "/get-all-reports",
      providesTags: ["Report"],
    }),

    // ================= GET SINGLE REPORT =================
    getReportById: builder.query({
      query: (id) => `/get-one-report/${id}`,
      providesTags: ["Report"],
    }),

    // ================= DELETE REPORT =================
    deleteReport: builder.mutation({
      query: (id) => ({
        url: `/delete-report/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Report"],
    }),

}),
});

export const {
  useCreateReportMutation,
  useGetAllReportsQuery,
  useGetReportByIdQuery,
  useDeleteReportMutation,
} = reportApi;
