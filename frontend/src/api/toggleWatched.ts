import getGraphqlData from './getGraphqlData';
import { Movie } from '../types';

// Sending POST request to server with mutation
export default async function toggleWatched(movieId: string, watched: boolean) {
  const mutationQuery = `mutation { toggleWatched(id: "${movieId}", watched: ${watched}) { Watched }}`;

  const response = await getGraphqlData<{ toggleWatched: Movie }>(mutationQuery);

  return response.toggleWatched;
}
