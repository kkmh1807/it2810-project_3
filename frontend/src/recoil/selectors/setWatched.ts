import { postRequest } from '../../api/sendData';
import { Movie } from '../../types';

// Sending POST request to server with mutation
export async function postMovieChanges(movie_id: string) {
  const mutationQuery = `mutation { toggleWatched(id: "${movie_id}") { Watched }}`;

  const response = await postRequest<{ toggleWatched: Movie }>(`http://localhost:4000/api?`, mutationQuery);

  return response.toggleWatched;
}
