
'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };    
    //////////////////////Tasks////////////////////////  
    const advertisement = document.querySelectorAll('.promo__adv img'),
          background = document.querySelector('.promo__bg'),
          genre = background.querySelector('.promo__genre'),
          filmsDB = document.querySelector('.promo__interactive-list'),
          add = document.querySelector('form.add'),
          input  = add.querySelector('.adding__input'),
          checkbox = add.querySelector('[type="checkbox"]');         
    //////////////////////////////////////////////
    const delAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };   

    const makeChanges = () => {
        genre.textContent = 'драма';    
        background.style.backgroundImage = 'url("img/bg.jpg")';
    };    

    const sortArr = (arr) => {
        arr.sort();
    };    
    
    function createMovieList(films, parent) {
        parent.innerHTML = '';  
        sortArr(films);

        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${film}
                    <div class="delete"></div>
                </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createMovieList(films, parent);
            })
        })
    }    
    //////////////////////////////////////////////
    add.addEventListener('submit', (event) => {
        event.preventDefault();
        const favorite = checkbox.checked;
        let newFilm = input.value;

        if(newFilm) {
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }
            if (favorite) {
                console.log("A fab film!");
            }
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
    
            createMovieList(movieDB.movies, filmsDB);
        };     
        event.target.reset();
    });      
    
    makeChanges();
    delAdv(advertisement);    
    createMovieList(movieDB.movies, filmsDB);    
       
});