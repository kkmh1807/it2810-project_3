import movieModel from '../models/movie';

async function getMovies() {
  const movies = await movieModel.find();
  return movies;
}

// Get movies by title
async function searchMoviesTitle(args: { title: string }) {
  const movies = await movieModel.find({ Series_Title: { $regex: new RegExp(args.title, 'i') } });

  return movies;
}

// Get movies by actors
async function searchMoviesByActors(args: { actor: string }) {
  const movies = await movieModel.find({
    $or: [
      { Star1: { $regex: new RegExp(args.actor, 'i') } },
      { Star2: { $regex: new RegExp(args.actor, 'i') } },
      { Star3: { $regex: new RegExp(args.actor, 'i') } },
      { Star4: { $regex: new RegExp(args.actor, 'i') } }
    ]
  });
  return movies;
}

// Get movies by genre
async function searchMoviesByGenres(args: { genre: string }) {
  const movies = await movieModel.find({ Genre: args.genre });
  return movies;
}
/* A resolver is used to say what will be RETURNED for each schema element */
const resolver = {
  movies: getMovies,
  getMoviesByTitle: searchMoviesTitle,
  getMoviesByActors: searchMoviesByActors,
  getMoviesByGenre: searchMoviesByGenres
};

export default resolver;
