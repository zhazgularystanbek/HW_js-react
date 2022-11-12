// //задание 1:
let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
// console.log(numberOfFilms);


// задание 2:
let personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};
// console.log(personalMovieDB.count);

//задание 3:
// const lastMovie = prompt('Один из последних просмотренных фильмов', '');
// const movieReview = prompt('На сколько оцените его?', '');
// const lastMovie1 = prompt('Один из последних просмотренных фильмов', '');
// const movieReview2 = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[lastMovie] = movieReview;
// personalMovieDB.movies[lastMovie1] = movieReview2;
// console.log(personalMovieDB);


// задание 4
// for (let i = 0; i < 2; i++) {
//     const lastMovie = prompt('Один из последних просмотренных фильмов', '');
//     const movieReview = prompt('На сколько оцените его?', '');
//     if (lastMovie != '' && lastMovie != null && lastMovie.length < 51 && movieReview != '' && movieReview != null && movieReview.length < 51) {
//         personalMovieDB.movies[lastMovie] = movieReview;
//     } else {
//         i--;
//     }

// }

// console.log(personalMovieDB);

// задание 5
if (personalMovieDB.count > 0 && personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 31) {
    console.log('Вы классический зритель!');
} else if (personalMovieDB.count >= 31) {
    console.log('Вы киноман!');
} else {
    console.log('Произошла ошибка!');
}


