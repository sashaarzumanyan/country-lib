import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InitialStateInterface } from '../../ts/interfaces/InitialState';

const initialState: InitialStateInterface = {
    selectedRegion: '',
    searchValue: ''
};



export const configSlice = createSlice({
    name: 'country',
    initialState,
    reducers: {
        setSearchConf(state, action: PayloadAction<{ searchValue: string, region: string }>) {
            state.searchValue = action.payload.searchValue;
            state.selectedRegion = action.payload.region;
        }
    }

});

export const { setSearchConf } = configSlice.actions;
export default configSlice.reducer;