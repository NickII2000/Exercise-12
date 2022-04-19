/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько оцените его?', ''),
    c = prompt('Ещё один из последних просмотренных фильмов?', ''),
    d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
const isBirthday = false;
const greeting = (isBirthday) ?
    'С днём рождения, г-н Кузнецов! Хорошо вам повеселиться!' : 'Доброе утро, г-н Кузнецов.';
console.log(greeting);

for (let i = 0; i < 5; i++) {
    console.log(i);
}

console.log(NaN || 2 || undefined);

console.log(NaN && 2 && undefined);

console.log(1 && 2 && 3);

console.log(!1 && 2 || !3);

console.log(25 || null && !3);

console.log(NaN || null || !3 || undefined || 5);

console.log(NaN || null && !3 && undefined || 5);

console.log(5 === 5 && 3 > 1 || 5);



const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if (hamburger === 3 && cola || fries === 3 && nuggets) {
    console.log(hamburger === 3 && cola || fries === 3 && nuggets);
    console.log('Done!');
}



let hamburger;
const fries = 3;
const cola = 0;
const nuggets = 2;

if (hamburger || cola || fries || nuggets) {
    console.log(hamburger || cola || fries || nuggets);
    console.log('Done!');
}



let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;

console.log(hamburger && cola || fries === 3 && nuggets);

if (hamburger && cola || fries === 3 && nuggets) {
    console.log('Done!');
}


// Место для первой задачи
function firstTask() {
    // Пишем решение вот тут
    for (let i = 5; i <= 10; i++) {
        console.log(i);
    }
}
firstTask();
// Место для второй задачи
function secondTask() {
    // Пишем решение вот тут
    for (let i = 20; i >= 10; i--) {
        if (i === 13) {
            break;
        }
        console.log(i);
    }

}
secondTask();
// Место для третьей задачи
function thirdTask() {
    // Пишем решение вот тут
    for (let i = 2; i <= 10; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }

}
thirdTask();
// Место для четвертой задачи

// Цикл, который нужно переписать:

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

function fourthTask() {
    // Пишем решение вот тут
    let i = 2;
    while (i <= 16) {

        if (i % 2 === 0) {
            i++;
            continue;
        } else {
            console.log(i);
            i++;
        }
    }
}
fourthTask();
// Место для пятой задачи

function fifthTask() {
    const arrayOfNumbers = [];

    // Пишем решение вот тут
    for (let i = 5; i <= 10; i++) {
        arrayOfNumbers.push(i);
    }

    // Не трогаем
    return arrayOfNumbers;
}
console.log(fifthTask());

// Место для первой задачи
function firstTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    // Пишем решение вот тут
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i]);
    }

    // Не трогаем
    return result;
}
console.log(firstTask());
// Место для второй задачи
function secondTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];

    // Пишем решение вот тут
    for (let i = 0; i < data.length; i++) {
        if (typeof (data[i]) === "number") {
            data[i] *= 2;
        } else if (typeof (data[i]) === "string") {
            data[i] += " - done";
        }
    }

    // Не трогаем
    return data;
}
console.log(secondTask());
// Место для третьей задачи
function thirdTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    // Пишем решение вот тут
    for (let i = data.length - 1; i >= 0; i--) {
        result.push(data[i]);
    }

    // Не трогаем
    return result;
}
console.log(thirdTask());


const lines = 5;
let result = '';
// Проверяется именно переменная result, формируйте строку в ней
for (let i = 0; i <= lines; i++) {
    for (let j = lines - i; j >= 0; j--) {
        result += ' ';
    }
    for (let k = 0; k < i; k++) {
        result += '*';
    }
    result += '*';
    for (let k = 0; k < i; k++) {
        result += '*';
    }
    for (let j = lines - i; j >= 0; j--) {
        result += ' ';
    }

    result += '\n';
}
console.log(result);