import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../constants'

export const basketApi = createApi({
    reducerPath: 'basketApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}`,
    }),
    tagTypes: ['Basket'],
    endpoints: builder => ({
        getBasket: builder.query({
            query: () => '/basket',
            // providesTags: ['Basket'],
        }),

        basketItemDetails: builder.query({
            query: invoiceId => `/basket/${invoiceId}`,
        }),

        addToBasket: builder.mutation({
            query: basket => ({
                url: '/basket',
                method: 'POST',
                body: basket,
            }),
            invalidatesTags: ['Basket'],
        }),
        updateBasket: builder.mutation({
            query: ({ id, ...rest }) => ({
                url: `/basket/${id}`,
                method: 'PUT',
                body: rest,
            }),

            invalidatesTags: ['Basket'],
        }),
        deleteBasket: builder.mutation({
            query: id => ({
                url: `/basket/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Basket'],
        }),
    }),
})
export const {
    useGetBasketQuery,
    useBasketItemDetailsQuery,
    useAddInvoiceMutation,
    useUpdateInvoiceMutation,
    useDeleteInvoiceMutation,
} = basketApi;