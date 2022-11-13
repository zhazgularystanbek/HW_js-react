//задание 1:
let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
start();


// задание 2:
let personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const lastMovie = prompt('Один из последних просмотренных фильмов', '');
        const b = prompt('На сколько оцените его?', '');
        if (lastMovie != '' && lastMovie != null && lastMovie.length < 51 && b != '' && b != null && b.length < 51) {
            personalMovieDB.movies[lastMovie] = b;
            console.log('Done!');
        } else {
            i--;
            console.log('error');
        }
    }
}

rememberMyFilms();

// задание 5
function detectPersonalLevel() {
    if (personalMovieDB.count > 0 && personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 31) {
        console.log('Вы классический зритель!');
    } else if (personalMovieDB.count >= 31) {
        console.log('Вы киноман!');
    } else {
        console.log('Произошла ошибка!');
    }    
}

detectPersonalLevel();

function showMyDB() {
    if (!personalMovieDB.privat) {
        console.log(personalMovieDB);
    }
}
showMyDB();



function writeYourGenres() {
    for (i = 1; i<4; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}
writeYourGenres();


