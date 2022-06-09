function movies(moviesInfo) {
    let movies = [];

    for (let i = 0; i < moviesInfo.length; i++) {
        let movie = {};
        let movieOperationAsArr = moviesInfo[i].split(' ');

        if (movieOperationAsArr.includes('addMovie')) {
            let filteredMovieAsStr = movieOperationAsArr.filter(x => x != 'addMovie').join(' ');
            movie.name = filteredMovieAsStr;
            movies.push(movie);

        } else if (movieOperationAsArr.includes('directedBy')) {
            let indexOfDirectedBy = movieOperationAsArr.indexOf('directedBy');
            let currMovie = movieOperationAsArr.slice(0, indexOfDirectedBy).join(' ');
            let directorOfCurrMovie = movieOperationAsArr.slice(indexOfDirectedBy + 1).join(' ');
            if (isExist(movies, currMovie)) {
                addProperty(movies, currMovie, 'director', directorOfCurrMovie);
            }

        } else if (movieOperationAsArr.includes('onDate')) {
            let indexOfOnDate = movieOperationAsArr.indexOf('onDate');
            let currMovie = movieOperationAsArr.slice(0, indexOfOnDate).join(' ');
            let currMovieOnDate = movieOperationAsArr.slice(indexOfOnDate + 1).join();
            if (isExist(movies, currMovie)) {
                addProperty(movies, currMovie, 'date', currMovieOnDate);
            }
        }

    }

    for (let movie of movies) {
        if (movie.name != undefined && movie.director != undefined && movie.date != undefined) {
            console.log(JSON.stringify(movie));
        }
    }

    function addProperty(movies, currMovie, property, value) {
        for (let el of movies) {
            if (el.name == currMovie) {
                el[property] = value;
            }
        }
        return movies;
    }
    function isExist(movies, movie) {
        for (let el of movies) {
            if (el.name == movie) {
                return true;
            }
        }
        return false;
    }
}
movies([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
]
);