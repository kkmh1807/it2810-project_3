import { selector } from 'recoil';
import { getRequest } from '../../api/fetchData';
import { Movie } from '../../types';
import { searchTextState } from '../atoms';

export const searchMovies = selector({
  key: 'search-movies',
  get: async ({ get }) => {
    const query = `{
      searchMovies (${get(searchTextState)}) {
        Series_Title
        Poster_Link
      }
    }`;

    const response = await getRequest<{ movies: Movie[] }>(`http://localhost:4000/api?query=${query}`);
    return response.movies;
  }
});
