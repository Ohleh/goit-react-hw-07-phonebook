import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
//
//   https://63063fe0c0d0f2b801193d94.mockapi.io/contact
//
export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://63063fe0c0d0f2b801193d94.mockapi.io',
  }),
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => '/contact',
    }),
    //
    // addContacts: build.mutation({
    //   query: body => ({
    //     url: `posts`,
    //     method: 'POST',
    //     body,
    //   }),
    //   invalidatesTags: ['Posts'],
    // }),
    //
  }),
});

export const { useGetContactsQuery } = contactsApi;
