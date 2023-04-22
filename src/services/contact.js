import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const contactApi = createApi({
    reducerPath: 'contactApi',
    baseQuery: fetchBaseQuery({ baseUrl: `http://api.basito.uz/apps/api/v1/` }),
    endpoints: (builder) => ({
        contact: builder.query({
            query: () => '/contact',
        }),
    }),
})

export const { useContactQuery } = contactApi;
