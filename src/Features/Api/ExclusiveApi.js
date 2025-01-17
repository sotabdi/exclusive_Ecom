import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const Exclusive = createApi({
    reducerPath: 'exclusiveApi',
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/app/v1" }),
    endpoints: (builder) => ({
      GetAllBanner: builder.query({
        query: () => '/banner',
      }),
      GetAllCategory: builder.query({
        query: ()=> '/category'
      })
    }),
  })
  
  // Export hooks for usage in functional components, which are
  // auto-generated based on the defined endpoints
  export const { useGetAllBannerQuery, useGetAllCategoryQuery } = Exclusive