import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const API_URL = 'https://api.basito.uz/apps/api/v1/'
const user = JSON.parse(localStorage.getItem('userData'))

export const commentsApi = createApi({
    reducerPath: 'commentsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
    }),
    tagTypes: ["Comment"],

    endpoints: (builder) => ({
        comments: builder.query({
            query: (id) => `/comments/${id}`,
            providesTags: ["Comment"]
        }),

        addComment: builder.mutation({
            query: (data) => ({
                url: '/comments',
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
        addLikeComment: builder.mutation({
            query: (id) => ({
                url: '/comments/',
                method: 'POST',
                body: {
                    method: "like",
                    params: {
                        comment_id: id,
                        liketype: "like"
                    },
                },
                headers: {
                    'Authorization': `Bearer ${user?.token}`
                }
            }),
            invalidatesTags: ['Comment']

        }),
        addDisLikeComment: builder.mutation({
            query: (id) => ({
                url: '/comment/',
                method: 'POST',
                body: {
                    method: "like",
                    params: {
                        comment_id: id,
                        liketype: "dislike"
                    },
                },
                headers: {
                    'Authorization': `Bearer ${user?.token}`
                }
            }),
            invalidatesTags: ['Comment']

        })
    }),
})

export const { useAddCommentMutation, useCommentsQuery, useAddLikeCommentMutation, useAddDisLikeCommentMutation } = commentsApi
