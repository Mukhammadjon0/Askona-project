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
            query: (requestData) => ({
                url: 'product/',
                method: 'GET',
                params: requestData,
              }),
            providesTags: ['Product'],
        }),
        productItemDetails: builder.query({
            query: data => ({
               url: `product`,
               method:'GET',
               params:data,
            }),
        }),
    }),
})
export const {
    useProductsQuery,
    useProductItemDetailsQuery,
} = productApi;