import movieModel from '../models/movie';

async function getMovies() {
  const movies = await movieModel.find();
  return movies;
}

/* A resolver is used to say what will be RETURNED for each schema element */
const resolver = {
  movies: getMovies
};

export default resolver;
