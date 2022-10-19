import { selector } from 'recoil';
import { getRequest } from '../../api/fetchData';
import { MovieResponse } from '../../types';
import { queryState } from '../atoms';

export const searchMovies = selector({
  key: 'search-movies',
  get: async ({ get }) => {
    const query = get(queryState);

    if (!query.text) return;

    const searchQuery = `{
      getMoviesByTitle (title: "${query.text}") {
        _id
        Series_Title
        Poster_Link
      }
    }`;

    const response = await getRequest<{ getMoviesByTitle: MovieResponse }>(`http://localhost:4000/api?query=${searchQuery}`);
    return response.getMoviesByTitle;
  }
});
