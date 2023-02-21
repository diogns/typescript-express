// import { DiaryEntry, NonSensitiveInfoDiaryEntry, Visibility, Weather, NewDiaryEntry } from '../types'
import { DiaryEntry, NonSensitiveInfoDiaryEntry, NewDiaryEntry } from '../types'

import diaryData from './diaries.json'
// import diaryData from './diaries' // .ts
// .tsx .ts .node .js .json  -> order of import files extensions

// const diaries: Array<DiaryEntry> = diaryData // .ts
const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

// export const getEntries = () => diaries
export const getEntries = (): DiaryEntry[] => diaries

export const findById = (id: number): NonSensitiveInfoDiaryEntry | undefined => {
    const entry = diaries.find(d => d.id === id)
    if (entry !== undefined) {
        const { comment, ...nonSensitiveInfo } = entry
        return nonSensitiveInfo
    }
    return undefined
}

export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoDiaryEntry[] => {
    return diaries.map(({ id, date, weather, visibility }) => {
        return { id, date, weather, visibility }
    })
}

// export const addDiary = ( date: string, weather: Weather, visibility: Visibility, comment: string ): DiaryEntry => {
export const addDiary = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
    const newDiary = {
        id: Math.max(...diaries.map(d => d.id)) + 1,
        // id: diaries.length + 1,
        ...newDiaryEntry
    }
    diaries.push(newDiary)
    return newDiary
}
