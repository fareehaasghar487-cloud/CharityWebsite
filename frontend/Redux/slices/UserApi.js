import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
    endpoints: (build) => ({
        signup: build.mutation({
            query: (data) => ({
                url: "/signup",
                method: 'POST',
                body: data
            })
        }),

        login: build.mutation({
            query: (data) => ({
                url: "/login",
                method: 'POST',
                body: data
            })
        })

    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useSignupMutation , useLoginMutation} = userApi;