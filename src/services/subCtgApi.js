import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const subCtgApi = createApi({
    reducerPath: 'subCtgApi',
    baseQuery: fetchBaseQuery({ baseUrl: `http://api.basito.uz/apps/api/v1/` }),
    endpoints: (builder) => ({
        getSubCtg: builder.query({
            query: () => '/subcategory/',
        }),
    }),
})

export const { useSubCtgQuery } = subCtgApi;
