import { MovieResponse } from '../types';
import getGraphqlData from './getGraphqlData';

export default async function getAllMovies(currentPage: number) {
  const query = `query {
    movies(currentPage:${currentPage}) {
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
