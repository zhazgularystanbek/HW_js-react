// //задание 1:
let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
// console.log(numberOfFilms);


// задание 2:
let personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};
console.log(personalMovieDB.count);

//задание 3:
const lastMovie = prompt('Один из последних просмотренных фильмов', '');
const movieReview = prompt('На сколько оцените его?', '');
const lastMovie1 = prompt('Один из последних просмотренных фильмов', '');
const movieReview2 = prompt('На сколько оцените его?', '');

personalMovieDB.movies[lastMovie] = movieReview;
personalMovieDB.movies[lastMovie1] = movieReview2;
console.log(personalMovieDB);


