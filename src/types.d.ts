// use extension types.d.ts to define types only definitions(static) for typescript not enum
// if you use enum, the extension is ts, not d.ts (types.ts) because it is not only types definitions use enum that
// can be used in javascript

// export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy'
// export type Visibility = 'great' | 'good' | 'ok' | 'poor'

// separate to another file enums.ts
// export enum Weather {
//     Sunny = 'sunny',
//     Rainy = 'rainy',
//     Cloudy = 'cloudy',
//     Windy = 'windy',
//     Stormy = 'stormy'
// }

// export enum Visibility {
//     Great = 'great',
//     Good = 'good',
//     Ok = 'ok',
//     Poor = 'poor'
// }
import { Weather, Visibility } from './enums'

export interface DiaryEntry {
    id: number
    date: string
    weather: Weather
    visibility: Visibility
    comment: string
}

// interface SpecialDiaryEntry extends DiaryEntry {
//     flightNumber: number
// }

// export type NonSensitiveInfoDiaryEntry = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility'>

export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>

export type NewDiaryEntry = Omit<DiaryEntry, 'id'>
