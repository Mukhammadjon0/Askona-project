import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const BASE_URL = 'https://api.basito.uz/apps/api/v1';

const baseQuery = fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
        const user = JSON.parse(localStorage.getItem('userData'))
        if (user) {
            headers.set('Authorization', `Bearer ${user?.token}`)
        }
        return headers
    },
})
const user = JSON.parse(localStorage.getItem('userData'))

export const savedApi = createApi({
    reducerPath: 'savedApi',
    baseQuery,
    tagTypes: ["Saved"],
    endpoints: (builder) => ({
        saved: builder.query({
            query: () => ({
                url: '/prosaved',
                method: "GET",
                headers: {
                    Authorization: `Bearer ${user?.token}`
                },
            }),
            providesTags: ['Saved']
        }),
        addProductToSaved: builder.mutation({
            query: data => ({
                url: '/prosaved/',
                method: 'POST',
                body: data,
                headers: {
                    Authorization: `Bearer ${user?.token}`
                }
            }),
            invalidatesTags: ['Saved']
        }),
        removeProductFromSaved: builder.mutation({
            query: (id) => ({
                url: `/prosaved/`,
                method: 'DELETE',
                body: { saved_id: id },

            }),
            invalidatesTags: ['Saved']
        }),
    }),
});

export const { useAddProductToSavedMutation, useRemoveProductFromSavedMutation, useSavedQuery } = savedApi;
