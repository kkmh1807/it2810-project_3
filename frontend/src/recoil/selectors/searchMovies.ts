import { selector } from 'recoil';
import { getRequest } from '../../api/fetchData';
import { Movie } from '../../types';
import { queryState } from '../atoms';

export const searchMovies = selector({
  key: 'search-movies',
  get: async ({ get }) => {
    const query = get(queryState);

    const searchQuery = `{
      searchMovies (${query.text}) {
        Series_Title
        Poster_Link
      }
    }`;

    const response = await getRequest<{ movies: Movie[] }>(`http://localhost:4000/api?query=${searchQuery}`);
    return response.movies;
  }
});
