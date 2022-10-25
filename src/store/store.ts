import { configureStore } from '@reduxjs/toolkit';
import { countryApi } from './service/countryApi';
import { configSlice } from './slice/configs';

export const store = configureStore({
    reducer: {
        configs: configSlice.reducer,
        [countryApi.reducerPath]: countryApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(countryApi.middleware)
});



// export type RootState = ReturnType<typeof store>
// export type AppStore = ReturnType<typeof store>
// export type AppDispatch = AppStore['dispatch']
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


