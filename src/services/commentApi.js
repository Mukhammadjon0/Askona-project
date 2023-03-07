import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const API_URL = 'http://68.183.21.222:1233/api/v1/'
const user = JSON.parse(localStorage.getItem('userData'))

export const commentsApi = createApi({
    reducerPath: 'commentsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
       
    }),
    tagTypes: ["Comment"],

    endpoints: (builder) => ({
        comments: builder.query({
            query: (id) => `/comment/${id}`,
            providesTags: ["Comment"]
        }),
        // Define the POST request
        addComment: builder.mutation({
            query: (data) => ({
                url: '/comment/',
                method: 'POST',
                body: {
                    method: 'commentadd',
                    params: data,
                },
                headers: {
                    'Authorization': `Bearer ${user?.token}`
                }
            }),
            invalidatesTags: ['Comment']

        }),
    }),
})

// Export the hooks to use the API endpoints
export const { useAddCommentMutation, useCommentsQuery } = commentsApi
