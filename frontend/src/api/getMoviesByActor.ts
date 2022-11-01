import { MovieResponse } from '../types';
import getGraphqlData from './getGraphqlData';

export default async function getMoviesByActor(actor: string, page: number, order: boolean) {
  const searchQuery = `query {
    getMoviesByActors (actor: "${actor}", currentPage: ${page}, order: ${order}) {
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

  const response = await getGraphqlData<{ getMoviesByActors: MovieResponse }>(searchQuery);
  return response.getMoviesByActors;
}
