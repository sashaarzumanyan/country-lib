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
    // getByRegion: builder.query<ICountry[], string>({
    //   query: (region) => ({
    //     url: `region/${region}`
    //   })
    // })
  }),
});

export const { useGetAllCountryQuery } = countryApi; 
// export const {} = countryApi; 