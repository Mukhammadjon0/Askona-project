import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../constants'

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}`,
    }),
    tagTypes: ['Product'],
    endpoints: builder => ({
        products: builder.query({
            query: () => '/product',
            providesTags: ['Product'],
        }),

        productItemDetails: builder.query({
            query: invoiceId => `/product/${invoiceId}`,
        }),

        // addProduct: builder.mutation({
        //   query: product => ({
        //     url: '/product',
        //     method: 'POST',
        //     body: product,
        //   }),

        //   invalidatesTags: ['Product'],
        // }),
        // updateProduct: builder.mutation({
        //   query: ({id, ...rest}) => ({
        //     url: `/product/${id}`,
        //     method: 'PUT',
        //     body: rest,
        //   }),

        //   invalidatesTags: ['Product'],
        // }),
        // deleteProduct: builder.mutation({
        //   query: id => ({
        //     url: `/product/${id}`,
        //     method: 'DELETE',
        //   }),
        //   invalidatesTags: ['Product'],
        // }),
    }),
})
export const {
    useProductsQuery,
    useProductItemDetailsQuery,
    //   useAddInvoiceMutation,
    //   useUpdateInvoiceMutation,
    //   useDeleteInvoiceMutation,
} = productApi;