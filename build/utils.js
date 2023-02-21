"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("./enums");
const parseComment = (CommentFromRequest) => {
    // if (typeof CommentFromRequest !== 'string') {
    if (!isString(CommentFromRequest)) {
        throw new Error('Incorrect or missing comment');
    }
    return CommentFromRequest;
};
const parseDate = (dateFromRequest) => {
    if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
        throw new Error('Incorrect or missing date');
    }
    return dateFromRequest;
};
const parseWeather = (weatherFromRequest) => {
    if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
        throw new Error('Incorrect or missing weather');
    }
    return weatherFromRequest;
};
const parseVisibility = (visibilityFromRequest) => {
    if (!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)) {
        throw new Error('Incorrect or missing visibility');
    }
    return visibilityFromRequest;
};
const isString = (string) => {
    // return typeof string === 'string' || string instanceof String
    // cont string1 = 'hello'  --> 'OK'
    // const string2 = new String('hello') --> 'NOK'
    return typeof string === 'string';
};
const isDate = (date) => {
    return Boolean(Date.parse(date));
};
// const isWeather = (string: string): boolean => {
//     return ['sunny', 'rainy', 'cloudy', 'windy', 'stormy'].includes(string)
// }
const isWeather = (param) => {
    return Object.values(enums_1.Weather).includes(param);
};
const isVisibility = (param) => {
    return Object.values(enums_1.Visibility).includes(param);
};
const toNewDiaryEntry = (object) => {
    const newDiaryEntry = {
        date: parseDate(object.date),
        weather: parseWeather(object.weather),
        visibility: parseVisibility(object.visibility),
        comment: parseComment(object.comment)
    };
    return newDiaryEntry;
};
exports.default = toNewDiaryEntry;
