import { MovieResponse } from '../types';
import getGraphqlData from './getGraphqlData';

export default async function getMoviesByGenre(genre: string, page: number, order: boolean) {
  const searchQuery = `query {
    getMoviesByGenre (genre: "${genre}", currentPage: ${page}, order: ${order}) {
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
        Watched,        
      }
      pageInfo {
        currentPage
        totalPages
        pageSize
      }
    }
  }`;

  const response = await getGraphqlData<{ getMoviesByGenre: MovieResponse }>(searchQuery);
  return response.getMoviesByGenre;
}
