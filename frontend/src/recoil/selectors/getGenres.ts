import { selector } from 'recoil';
import { getRequest } from '../../api/fetchData';

export const getGenres = selector({
  key: 'genres',
  get: async () => {
    const query = `{
      genres
    }`;

    const response = await getRequest<{ genres: string[] }>(`http://localhost:4000/api?query=${query}`);
    return response.genres;
  }
});
