import { MovieResponse } from '../types';
import getGraphqlData from './getGraphqlData';

export default async function getMoviesByTitle(title: string, page: number) {
  const searchQuery = `query {
    getMoviesByTitle (title: "${title}", currentPage: ${page}) {
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

  const response = await getGraphqlData<{ getMoviesByTitle: MovieResponse }>(searchQuery);
  return response.getMoviesByTitle;
}
