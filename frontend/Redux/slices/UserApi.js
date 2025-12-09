import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
    endpoints: (build) => ({

        signup: build.mutation({
            query: (data) => ({
                url: "/signup",
                method: "POST",
                body: data,
            }),
        }),

        login: build.mutation({
            query: (data) => ({
                url: "/login",
                method: "POST",
                body: data,
            }),
        }),

        verifyOTP: build.mutation({
            query: (data) => ({
                url: "/verify-otp",
                method: "POST",
                body: data,
            }),
        }),

        forgotPassword: build.mutation({
            query: (data) => ({
                url: "/forget-password",
                method: "POST",
                body: data,
            }),
        }),

        resetPassword: build.mutation({
            query: (data) => ({
                url: "/reset-password",
                method: "POST",
                body: data,   // { email, otp, newPassword, confirmPassword }
            }),
        }),
    }),
});

export const {
    useSignupMutation,
    useLoginMutation,
    useVerifyOTPMutation,
    useForgotPasswordMutation,
    useResetPasswordMutation
} = userApi;
