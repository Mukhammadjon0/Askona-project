import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { useContext } from 'react';
import { StateContext } from '../context';
const BASE_URL = 'https://askona.herokuapp.com/api/v1';

const baseQuery = fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
        const user = JSON.parse(localStorage.getItem('userData'))
        if (user) {
            headers.set('authorization', `Bearer ${user.token}`)
        }
        return headers
    },
})


export const basketApi = createApi({
    reducerPath: 'basketApi',
    baseQuery,
    endpoints: (builder) => ({
        addProductToBasket: builder.mutation({
            query: ({ product_id }) => ({
                url: '/basket',
                method: 'POST',
                body: { product_id },
            }),
        }),
        removeProductFromBasket: builder.mutation({
            query: (bronId) => ({
                url: `/basket/`,
                method: 'DELETE',
                body: { bron_id: bronId },
            }),
        }),
        updateProductQuantityInBasket: builder.mutation({
            query: ({ bron_id, quantity }) => ({
                url: '/basket',
                method: 'PUT',
                body: { bron_id, quantity },
            }),
        }),
        getBasket: builder.query({
            query: () => '/basket',
        }),
    }),
});

export const { useAddProductToBasketMutation, useRemoveProductFromBasketMutation, useUpdateProductQuantityInBasketMutation, useGetBasketQuery } = basketApi;
