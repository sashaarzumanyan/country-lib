import { ICountry } from '../interfaces/ICountry';
//  components/Border.tsx --props
export interface IBorderProps{
    borders: string[],
    neighbors: ICountry[],
    push: any
}