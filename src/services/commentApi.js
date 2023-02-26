import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const API_URL = 'https://askona.herokuapp.com/api/v1/'

export const commentsApi = createApi({
    reducerPath: 'commentsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
        prepareHeaders: (headers, { getState }) => {
            // Here you can add your authorization token to the headers
            const user = JSON.parse(localStorage.getItem('userData'))
            if (user) {
                headers.set('Authorization', `Bearer ${user?.token}`)
            }
            return headers
        },
    }),
    endpoints: (builder) => ({
        // Define the POST request
        addComment: builder.mutation({
            query: (data) => ({
                url: 'comment',
                method: 'POST',
                body: {
                    method: 'commentadd',
                    params: data,
                },
            }),
        }),

        // Define the GET request
        getComments: builder.query({
            query: (productId) => ({
                url: 'comment',
                method: 'GET',
                params: {
                    method: 'commentadd',
                    params: {
                        product_id: productId,
                    },
                },
            }),
        }),
    }),
})

// Export the hooks to use the API endpoints
export const { useAddCommentMutation, useGetCommentsQuery } = commentsApi
