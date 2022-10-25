import { getMovies } from './resolvers/getMovies';
import { searchMoviesTitle } from './resolvers/searchMoviesTitle';
import { searchMoviesByActors } from './resolvers/searchMoviesByActors';
import { searchMoviesByGenres } from './resolvers/searchMoviesByGenres';
import { toggleWatched } from './resolvers/toggleWatched';
import { getGenres } from './resolvers/getGenres';

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
