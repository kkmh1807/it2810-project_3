import { selector } from 'recoil';
import { getRequest } from '../../api/fetchData';
import { MovieResponse } from '../../types';
import { currentPage } from '../atoms';

// TODO: probably not needed. remove?
export const getAllMovies = selector({
  key: 'all-movies',
  get: async ({ get }) => {
    const query = `{
      movies(currentPage:${get(currentPage)}) {
        data {
          Series_Title
        }
        pageInfo {
          currentPage
          totalPages
          pageSize
        }
      }
    }`;

    const response = await getRequest<{ movies: MovieResponse }>(`http://localhost:4000/api?query=${query}`);
    return response.movies;
  }
});
