import movieModel from '../../models/movie';

export async function getGenres() {
  const genres = await movieModel.find().distinct('Genre');

  return genres;
}
