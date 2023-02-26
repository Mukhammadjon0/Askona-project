import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const categoryApi = createApi({
    reducerPath: 'categoryApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://askona.herokuapp.com/api/v1/' }),
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: () => 'category/',
        }),
    }),
})

export const { useGetCategoriesQuery } = categoryApi
