import getGraphqlData from './getGraphqlData';
import { Movie } from '../types';

// Sending POST request to server with mutation
export default async function toggleWatched(movie_id: string) {
  const mutationQuery = `mutation { toggleWatched(id: "${movie_id}") { Watched }}`;

  const response = await getGraphqlData<{ toggleWatched: Movie }>(mutationQuery);

  return response.toggleWatched;
}
