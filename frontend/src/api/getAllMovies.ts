import { MovieResponse } from '../types';
import getGraphqlData from './getGraphqlData';

export default async function getAllMovies(currentPage: number, order: boolean) {
  const query = `query {
    movies(currentPage:${currentPage}, order: ${order}) {
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

  const response = await getGraphqlData<{ movies: MovieResponse }>(query);
  return response.movies;
}
