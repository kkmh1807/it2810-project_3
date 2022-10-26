import { MovieResponse } from '../types';
import getGraphqlData from './getGraphqlData';

export default async function getMoviesByAll(query: string, page: number) {
  const searchQuery = `query {
    getMoviesByAll (query: "${query}" currentPage: ${page}) {
      data {
        _id,
        Series_Title,
        Poster_Link,
        Genre,
        Star1,
        Star2,
        Star3,
        Star4,
        IMDB_Rating, 
        Overview,
      }
      pageInfo {
        currentPage
        totalPages
        pageSize
      }
    }
  }`;

  const response = await getGraphqlData<{ getMoviesByAll: MovieResponse }>(`http://localhost:4000/api?query=${searchQuery}`);
  return response.getMoviesByAll;
}
