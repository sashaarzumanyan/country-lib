import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { ICountry } from '../../ts/interfaces/ICountry';

export const countryApi = createApi({
  reducerPath: 'countryApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://restcountries.com/v2/' }),
  endpoints: (builder) => ({
    getAllCountry: builder.query<ICountry[], string>({
      query: () => ({
        url: 'all?fields=name,flags,capital,population,region'
      }),
    }),
    getSingleCountry: builder.query<ICountry[] | null, string>({
      query: (name) => ({
        url: `name/${name}`
      })
    }),
    getByCode: builder.query<ICountry[], string[]>({
      query: (borders) => ({
        url: `alpha?codes=${borders.join(',')}`
      })
    })
  }),
});

export const { useGetAllCountryQuery, useGetSingleCountryQuery, useGetByCodeQuery } = countryApi; 