import movieModel from '../../models/movie';

// Set status of a movie to watched
export async function toggleWatched(args: { id: string; watched: boolean }) {
  // https://stackoverflow.com/questions/67361357/how-do-i-update-a-boolean-field-to-its-opposite-in-mongoose
  return await movieModel.findByIdAndUpdate(args.id, [{ $set: { Watched: args.watched } }]);
}
