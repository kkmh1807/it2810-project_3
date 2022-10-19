import movieModel from '../models/movie';

//Disse skal endres av frontend, dette gir pagination.
//Limit er antall filmer som vises pr. side, og skip er antall filmer som hoppes over.
//Hvor hver nye side man blar til, vil vi ha skip += 10
let limit: number = 10;
let skip: number = 0;

async function getMovies(args: { limit: number; skip: number }) {
  const movies = await movieModel.find().limit(args.limit).skip(args.skip);
  return movies;
}

// Get movies by title
async function searchMoviesTitle(args: { title: string; limit: number; skip: number }) {
  const movies = await movieModel
    .find({ Series_Title: { $regex: new RegExp(args.title, 'i') } })
    .limit(args.limit)
    .skip(args.skip);

  return movies;
}

// Get movies by actors
async function searchMoviesByActors(args: { actor: string; limit: number; skip: number }) {
  const movies = await movieModel
    .find({
      $or: [
        { Star1: { $regex: new RegExp(args.actor, 'i') } },
        { Star2: { $regex: new RegExp(args.actor, 'i') } },
        { Star3: { $regex: new RegExp(args.actor, 'i') } },
        { Star4: { $regex: new RegExp(args.actor, 'i') } }
      ]
    })
    .limit(args.limit)
    .skip(args.skip);
  return movies;
}

// Get movies by genre
async function searchMoviesByGenres(args: { genre: string; limit: number; skip: number }) {
  const movies = await movieModel.find({ Genre: args.genre }).limit(args.limit).skip(args.skip);
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
