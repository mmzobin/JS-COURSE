"use strict";

const numberOfFilms = +prompt("Skolko filmov vi posmotreli?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const answer2 = prompt("Odin iz poslednih prosmotrennih filmov?", "");
const answer3 = prompt("Na skolko ocenite ego?", "");

personalMovieDB.movies[answer2] = [answer3];

console.log(personalMovieDB);
