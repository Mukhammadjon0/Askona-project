import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const categoryApi = createApi({
    reducerPath: 'categoryApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.basito.uz/apps/api/v1' }),
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: () => 'category/',
        }),
    }),
})

export const { useGetCategoriesQuery } = categoryApi
