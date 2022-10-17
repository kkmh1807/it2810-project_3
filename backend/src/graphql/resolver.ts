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
async function searchMoviesByActors(args: { Star1: string; Star2: string; Star3: string; Star4: string }) {
  const movies = await movieModel.find({
    Star1: { $regex: new RegExp(args.Star1, 'i') },
    Star2: { $regex: new RegExp(args.Star2, 'i') },
    Star3: { $regex: new RegExp(args.Star3, 'i') },
    Star4: { $regex: new RegExp(args.Star4, 'i') }
  });
  return movies;
}

// Get movies by genre
async function searchMoviesByGenres(args: { genres: string }) {
  const movies = await movieModel.find({ Genres: { $reges: new RegExp(args.genres) } });
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
