import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
    credentials: "include", // send cookies automatically
  }),
  tagTypes: ["User"],

  endpoints: (build) => ({
    // ✅ Signup
    signup: build.mutation({
      query: (data) => ({
        url: "/signup",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),

    // ✅ Login
    login: build.mutation({
      query: (data) => ({
        url: "/login",
        method: "POST",
        body: data,
      }),
    }),

    // ✅ Verify OTP
    verifyOTP: build.mutation({
      query: (data) => ({
        url: "/verify-otp",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),

    // ✅ Forgot Password
    forgotPassword: build.mutation({
      query: (data) => ({
        url: "/forget-password",
        method: "POST",
        body: data,
      }),
    }),

    // ✅ Reset Password
    resetPassword: build.mutation({
      query: (data) => ({
        url: "/reset-password",
        method: "POST",
        body: data,
      }),
    }),

    // ✅ Get All Users
    getAllUsers: build.query({
      query: () => "/get-all-users",
      providesTags: ["User"],
    }),

    // ✅ Delete User
    deleteUser: build.mutation({
      query: (id) => ({
        url: `/delete-user/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
    }),

    // ✅ Update User Role
    updateUserRole: build.mutation({
      query: ({ id, role }) => ({
        url: `/update-user-role/${id}`,
        method: "PATCH",
        body: { role },
      }),
      invalidatesTags: ["User"],
    }),

    // ✅ Get Logged-in User Profile
    getProfile: build.query({
      query: () => "/my-profile",
      providesTags: ["User"],
    }),

    // ✅ Update Profile
    updateProfile: build.mutation({
      query: (formData) => ({
        url: "/update-profile",
        method: "PUT",
        body: formData,
      }),
      invalidatesTags: ["User"], // refetch profile after update
    }),
  }),
});

// Export hooks
export const {
  useSignupMutation,
  useLoginMutation,
  useVerifyOTPMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useGetAllUsersQuery,
  useDeleteUserMutation,
  useUpdateUserRoleMutation,
  useGetProfileQuery,
  useUpdateProfileMutation,
} = userApi;
