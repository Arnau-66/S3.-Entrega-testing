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

  const totalScore = moviesByDirector.reduce((acc, movie) => acc + movie.score, 0);
  const average = totalScore / moviesByDirector.length;
  return Number(average.toFixed(2));
}

// Exercise 4:  Alphabetic order by title 

function orderAlphabetically(movies) {
  const onlyTitles = movies.map(movie => movie.title);
  const ABsortedTitles = onlyTitles.sort ((a, b) => a.localeCompare(b)) ;
  const ABsorted20Titles = ABsortedTitles.slice(0 , 20);
  return  ABsorted20Titles;
}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {
  const moviesCopy = [...movies];
  const sortedMovies = moviesCopy.sort((a,b) => {
    if (a.year !== b.year){
      return a.year - b.year;
    } else {
      return a.title.localeCompare(b.title);
    }
  })

  return sortedMovies;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, category) {
  const filteredMovies = movies.filter(movie => movie.genre.includes(category));
  if (filteredMovies.length === 0) return 0;

  const totalScore = filteredMovies.reduce((acc, movie) => acc + movie.score, 0);
  const averageScore = totalScore / filteredMovies.length;
  return Number(averageScore.toFixed(2));

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {
  return movies.map(movie => {
    const movieCopy = { ...movie };
    const duration = movieCopy.duration;

    let hours = 0;
    let minutes = 0;

    if (duration.includes('h')) {
      hours = parseInt(duration.match(/(\d+)h/)[1]);
    }

    if (duration.includes('min')) {
      minutes = parseInt(duration.match(/(\d+)min/)[1]);
    }

    const totalMinutes = hours * 60 + minutes;
    movieCopy.duration = totalMinutes;

    return movieCopy;
  });
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(movies, year) {

  const moviesOfYear = movies.filter(movie => movie.year === year);
  const sorted = moviesOfYear.sort((a, b) => b.score - a.score);
  const bestMovie = sorted[0];
  return [bestMovie];
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
