// Exercise 1: Get the array of all directors.

function getAllDirectors(movies) {
  return movies.map(movie => movie.director);
}


// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
  return movies.filter(movie => movie.director === director);
}

// Exercise 3: Calculate the average of the films of a given director.

function moviesAverageOfDirector(movies, director) {
  const moviesByDirector = movies.filter(movie => movie.director === director);
  if (moviesByDirector.length === 0) return 0;

  const totalScore = moviesByDirector.reduce((sum, movie) => sum + movie.score, 0);
  const average = totalScore / moviesByDirector.length;
  return Number(average.toFixed(2));
}

// Exercise 4:  Alphabetic order by title 

function orderAlphabetically(movies) {
  const onlyTitles = movies.map(movie => movie.title);
  const ABorderedTitles = onlyTitles.sort ((a, b) => a.localeCompare(b)) ;
  const ABordered20Titles = ABorderedTitles.slice(0 , 20);
  return  ABordered20Titles;
}

// Exercise 5: Order by year, ascending
function orderByYear() {

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
