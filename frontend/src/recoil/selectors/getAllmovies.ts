import { selector } from 'recoil';
import { getRequest } from '../../api/fetchData';
import { Movie } from '../../types';

// TODO: probably not needed. remove?
export const getAllMovies = selector({
  key: 'all-movies',
  get: async () => {
    const query = `{
      movies {
        _id
        Series_Title
        Poster_Link
      }
    }`;

    const response = await getRequest<{ movies: Movie[] }>(`http://localhost:4000/api?query=${query}`);
    return response.movies;
  }
});
