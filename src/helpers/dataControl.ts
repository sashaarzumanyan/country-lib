import { ICountry } from '../ts/interfaces/ICountry';

export const dataFilter =
    (
        serachConf: { search: string, region: string },
        callback: React.Dispatch<React.SetStateAction<ICountry[]>>,
        // callback: (param: ICountry[]) => ICountry[],
        initialState: ICountry[]
    ) => {
        const { region, search } = serachConf;
        // eslint-disable-next-line prefer-const
        let data = initialState ? [...initialState] : [];

        if (region) {
            // debugger
            data = data.filter((elem) => elem.region.includes(region));
        };

        if (search) {
            data = data.filter(elem => elem.name.toLowerCase().includes(search.toLowerCase()));
        };

        callback(data);
    };