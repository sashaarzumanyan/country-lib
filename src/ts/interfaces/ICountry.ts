interface ICurrencie {
    code: string,
    name: string,
    symbol: string
}

interface ILanguage {
    iso639_1: string,
    iso639_2: string,
    name: string,
    nativeName: string
}

export interface ICountry {
    name: string,
    topLevelDomain: string[],
    callingCodes: number[],
    capital: string,
    altSpellings: string[],
    subregion: string,
    region: string,
    population: number,
    area: number,
    languages:ILanguage[],
    currencies: ICurrencie[],
    flag: any,
    timezones: string[],
    borders: string[],
    nativeName: string,
    flags: {svg: string, png: string},
    independent: boolean
}