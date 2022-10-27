import movieModel from '../../models/movie';

// Set status of a movie to watched
export async function toggleWatched(args: { id: string; watched: boolean }) {
  return await movieModel.findByIdAndUpdate(args.id, [{ $set: { Watched: args.watched } }]);
}
