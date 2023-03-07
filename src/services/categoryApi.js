import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const categoryApi = createApi({
    reducerPath: 'categoryApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://68.183.21.222:1233/api/v1/' }),
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: () => 'category/',
        }),
    }),
})

export const { useGetCategoriesQuery } = categoryApi
