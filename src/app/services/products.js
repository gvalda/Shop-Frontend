import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';

import { PRODUCTS_DOMAIN } from '../../config';

const baseQuery = fetchBaseQuery({
  baseUrl: PRODUCTS_DOMAIN,
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth?.token;
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }
    return headers;
  },
});

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 5 });

export const productApi = createApi({
  reducerPath: 'products',
  baseQuery: baseQueryWithRetry,
  tagTypes: ['Product'],
  endpoints: (build) => ({
    getProducts: build.query({
      query: () => ({ url: 'products' }),
      transformResponse: (response) => response.products,
      providesTags: (result) => [
        ...result.map(({ sku }) => ({ type: 'Product', id: sku })),
      ],
    }),
    getProduct: build.query({
      query: ({ sku }) => ({ url: `products/${sku}` }),
      providesTags: ({ sku }) => [{ type: 'Product', id: sku }],
    }),
  }),
});

export const { useGetProductsQuery, useGetProductQuery } = productApi;
