import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const BASE_URL = 'http://68.183.21.222:1233/api/v1/';

const baseQuery = fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
        const user = JSON.parse(localStorage.getItem('userData'))
        if (user?.token) {
            headers.set('Authorization', `Bearer ${user?.token}`)
        }
        return headers
    },
})
const user = JSON.parse(localStorage.getItem('userData'))

export const basketApi = createApi({
    reducerPath: 'basketApi',
    baseQuery,
    tagTypes: ["Basket"],
    endpoints: (builder) => ({
        basket: builder.query({
            query: () => '/basket',
            providesTags: ['Basket']
        }),
        addProductToBasket: builder.mutation({
            query: id => ({
                url: '/basket/',
                method: 'POST',
                body: { product_id: id },
                headers: {
                    Authorization: `Bearer ${user?.token}`
                }
            }),
            invalidatesTags: ['Basket']
        }),
        removeProductFromBasket: builder.mutation({
            query: (id) => ({
                url: `/basket/`,
                method: 'DELETE',
                body: { bron_id: id },

            }),
            invalidatesTags: ['Basket']

        }),
        updateProductQuantityInBasket: builder.mutation({
            query: ({ bron_id, quantity }) => ({
                url: '/basket/',
                method: 'PUT',
                body: { bron_id, quantity },
            }),
            invalidatesTags: ['Basket']
        }),

    }),
});

export const { useAddProductToBasketMutation, useRemoveProductFromBasketMutation, useUpdateProductQuantityInBasketMutation, useBasketQuery } = basketApi;
