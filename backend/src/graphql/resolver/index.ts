import { getMovies } from './getMovies';
import { searchMoviesTitle } from './searchMoviesTitle';
import { searchMoviesByActors } from './searchMoviesByActors';
import { searchMoviesByGenres } from './searchMoviesByGenres';
import { toggleWatched } from './toggleWatched';
import { getGenres } from './getGenres';

/* A resolver is used to say what will be RETURNED for each schema element */
const resolver = {
  movies: getMovies,
  getMoviesByTitle: searchMoviesTitle,
  getMoviesByActors: searchMoviesByActors,
  getMoviesByGenre: searchMoviesByGenres,
  toggleWatched: toggleWatched,
  genres: getGenres
};

export default resolver;
