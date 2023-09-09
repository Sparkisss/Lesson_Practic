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
for (let node of filmsDB.childNodes) {
    if (node.nodeName === '#text') {
        continue;
    }
    console.log(node);
}