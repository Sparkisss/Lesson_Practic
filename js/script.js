/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// Tasks 
const advertisement = document.querySelectorAll('.promo__adv img'),
      background = document.querySelector('.promo__bg'),
      genre = background.querySelector('.promo__genre'),
      filmsDB = document.querySelector('.promo__interactive-list');

advertisement.forEach(item => {
    item.remove();
})

genre.textContent = 'драма';

background.style.backgroundImage = 'url("img/bg.jpg")';

filmsDB.innerHTML = '';

movieDB.movies.forEach((film, i) => {
    filmsDB.innerHTML += `
        <li class="promo__interactive-item">${i} ${film}
            <div class="delete"></div>
        </li>
    `;
});
//////////////////////////////////////////////
genre.style.cursor = 'pointer';

const delElement = (e) => {    
    e.target.remove();
};

genre.addEventListener('click', delElement);
////////////////////////////////////////////
// console.log(document.body.childNodes);
// console.log(document.body.firstChild);
// console.log(filmsDB.firstElementChild);
// for (let node of filmsDB.childNodes) {
//     if (node.nodeName === '#text') {
//         continue;
//     }
//     console.log(node);
// }

// let students = {
//     js: [{
//         name: 'John',
//         progress: 100
//     }, {
//         name: 'Ivan',
//         progress: 60
//     }],

//     html: {
//         basic: [{
//             name: 'Peter',
//             progress: 20
//         },{
//             name: 'Ann',
//             progress: 18
//         }],

//         pro: [{
//             name: 'Sam',
//             progress: 10
//         }]
//     }
// };

// function getTotalProgressByIteration(data) {
//     let total = 0;
//     let students = 0;

//     for(let course of Object.values(data)) {
//         if (Array.isArray(course)) {
//             students += course.length;

//             for (let i = 0; i < course.length; i++) {
//                 total += course[i].progress;
//             }
//         }else {
//             for(let subCourse of Object.values(course)) {
//                 students += subCourse.length;

//                 for (let i = 0; i < subCourse.length; i++) {
//                     total += subCourse[i].progress;
//                 }
//             }
//         }
//     }

//     return total / students;
// }

// console.log(getTotalProgressByIteration(students));

function pow(x, n) {
    if (n === 1) {
        return x;
    }else {
        return x * pow(x, n - 1);
    }
}

// const pr = pow(2, 6);
// console.log(pr);


function factorial(n) {
    if (n % 1 !== 0) {
        return "Число дробное";
    }else if (n <= 0) {
        return 1;
    }else{
        return n * factorial(n - 1);
    }
}

let result = factorial(2.3);
console.log(result);
let result2 = factorial(0);
console.log(result2);
let result3 = factorial(4);
console.log(result3);
let result4 = factorial(-1);
console.log(result4);
let result5 = factorial(123.3);
console.log(result5);