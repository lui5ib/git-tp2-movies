const movies = require('./movies.json');

/**
 * This function returns a Array top ten movies.
 * @returns {Array}
 */
function getFirstTenMovies(){
    //complete with your code
    const tenMovies = movies.slice(0, 10);
    console.log (tenMovies);
}
/**
 * This function returns a Array based on the genre or genders introduced.
 * @param  {String} genre
 * @returns {Array}
 */
 function getMoviesWithGenre(genre){
    //complete with your code
    const genreMovie = movies.filter((movie) => movie.genre === genre);
    console.log (genreMovie);

}

function main(){
    const firstTenMovies = getFirstTenMovies();
    const dramaMovies = getMoviesWithGenre('Drama');
    console.log(`Only first ten movies:\n${firstTenMovies}\n`);
    console.log(`Only Drama movies:\n${dramaMovies}\n`);
}

main();
