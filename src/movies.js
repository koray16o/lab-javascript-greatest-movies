// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map(movie => movie.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let spielberg = moviesArray.filter(
    movie =>
      movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
  );
  return spielberg.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  } else {
    const moviesWithFilter = moviesArray.filter(movie => movie.score);
    const totalScore = moviesWithFilter.reduce((sum, movie) => {
      return sum + movie.score;
    }, 0);

    const averageScore = totalScore / moviesArray.length;
    return Number(averageScore.toFixed(2));
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const noDrama = moviesArray.filter(movie => movie.genre.includes('Drama'));
  if (noDrama.length === 0) {
    return 0;
  } else {
    let totalScore = noDrama.reduce((acc, movie) => {
      return acc + movie.score;
    }, 0);

    let avgScore = totalScore / noDrama.length;

    let floatedNumber = Number(avgScore.toFixed(2));
    return floatedNumber;
  }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const newArray = moviesArray.slice().sort((movie1, movie2) => {
    if (movie1.year !== movie2.year) {
      return movie1.year - movie2.year;
    } else {
      return movie1.title.localeCompare(movie2.title);
    }
  });
  return newArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const sortedArray = moviesArray
    .slice()
    .sort((movie1, movie2) => movie1.title.localeCompare(movie2.title))
    .map(movie => movie.title)
    .slice(0, 20);
  return sortedArray;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
