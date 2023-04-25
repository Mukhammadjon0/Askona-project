import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const BASE_URL = 'https://api.basito.uz/apps/api/v1/';

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
            query: () => 'basket',
            providesTags: ['Basket']
        }),
        addProductToBasket: builder.mutation({
            query: data => ({
                url: '/basket/',
                method: 'POST',
                body: data,
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
            query: (body) => ({
                url: '/basket/',
                method: 'PUT',
                body: body,
            }),
            invalidatesTags: ['Basket']
        }),

    }),
});

export const { useAddProductToBasketMutation, useRemoveProductFromBasketMutation, useUpdateProductQuantityInBasketMutation, useBasketQuery } = basketApi;
