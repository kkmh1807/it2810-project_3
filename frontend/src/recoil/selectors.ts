import { selector } from 'recoil';
import getAllMovies from '../api/getAllMovies';
import getGenres from '../api/getGenres';
import getMoviesByActor from '../api/getMoviesByActor';
import getMoviesByGenre from '../api/getMoviesByGenre';
import getMoviesByTitle from '../api/getMoviesByTitle';
import { currentPageState, queryState } from './atoms';

export const allMoviesSelector = selector({
  key: 'all-movies',
  get: async ({ get }) => {
    const currentPage = get(currentPageState);
    return await getAllMovies(currentPage);
  }
});

export const genresSelector = selector({
  key: 'genres',
  get: async () => {
    return await getGenres();
  }
});

const queryFunctionMap = {
  // TODO: change to all
  ALL: getMoviesByTitle,
  TITLE: getMoviesByTitle,
  ACTOR: getMoviesByActor,
  GENRE: getMoviesByGenre
};

export const searchMoviesSelector = selector({
  key: 'search-movies',
  get: async ({ get }) => {
    const query = get(queryState);
    const currentPage = get(currentPageState);

    if (!query.value) return;

    const queryFunction = queryFunctionMap[query.mode];

    return await queryFunction(query.value, currentPage);
  }
});
