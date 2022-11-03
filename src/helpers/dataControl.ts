import React from 'react';
import { ICountry } from '../ts/interfaces/ICountry';

/* 
    // dataFilter
    // filter country array by search and select value
    // params { searchConfigs, setState, countryArray} 
*/

export const dataFilter =
    (
        serachConf: { search: string, region: string },
        callback: React.Dispatch<React.SetStateAction<ICountry[]>>,
        initialState: ICountry[]
    ) => 
    //
    {
        const { region, search } = serachConf;
        // eslint-disable-next-line prefer-const
        let data = initialState ? [...initialState] : [];

        if (region) {
            data = data.filter((elem) => elem.region.includes(region));
        };

        if (search) {
            data = data.filter(elem => elem.name.toLowerCase().includes(search.toLowerCase()));
        };

        callback(data);
    };