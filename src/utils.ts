import { NewDiaryEntry } from './types'
import { Weather, Visibility } from './enums'

const parseComment = (CommentFromRequest: any): string => {
    // if (typeof CommentFromRequest !== 'string') {
    if (!isString(CommentFromRequest)) {
        throw new Error('Incorrect or missing comment')
    }
    return CommentFromRequest
}

const parseDate = (dateFromRequest: any): string => {
    if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
        throw new Error('Incorrect or missing date')
    }
    return dateFromRequest
}

const parseWeather = (weatherFromRequest: any): Weather => {
    if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
        throw new Error('Incorrect or missing weather')
    }
    return weatherFromRequest
}

const parseVisibility = (visibilityFromRequest: any): Visibility => {
    if (!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)) {
        throw new Error('Incorrect or missing visibility')
    }
    return visibilityFromRequest
}

const isString = (string: string): boolean => {
    // return typeof string === 'string' || string instanceof String
    // cont string1 = 'hello'  --> 'OK'
    // const string2 = new String('hello') --> 'NOK'
    return typeof string === 'string'
}

const isDate = (date: string): boolean => {
    return Boolean(Date.parse(date))
}

// const isWeather = (string: string): boolean => {
//     return ['sunny', 'rainy', 'cloudy', 'windy', 'stormy'].includes(string)
// }
const isWeather = (param: any): boolean => {
    return Object.values(Weather).includes(param)
}

const isVisibility = (param: any): boolean => {
    return Object.values(Visibility).includes(param)
}

const toNewDiaryEntry = (object: any): NewDiaryEntry => {
    const newDiaryEntry: NewDiaryEntry = {
        date: parseDate(object.date),
        weather: parseWeather(object.weather),
        visibility: parseVisibility(object.visibility),
        comment: parseComment(object.comment)
    }
    return newDiaryEntry
}

export default toNewDiaryEntry
