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
    timezones: string[],
    borders: string[],
    nativeName: string,
    flags: {svg: string, png: string},
    independent: boolean
}