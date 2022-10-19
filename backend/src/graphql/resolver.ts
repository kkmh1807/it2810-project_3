import movieModel from '../models/movie';

interface PaginationParams {
  pageSize: number;
  currentPage: number;
}

async function getMovies(args: PaginationParams) {
  const count = await movieModel.countDocuments();
  const movies = await movieModel
    .find()
    .limit(args.pageSize)
    .skip((args.currentPage - 1) * args.pageSize);

  return {
    data: movies,
    pageInfo: {
      pageSize: args.pageSize,
      currentPage: args.currentPage,
      totalPages: Math.ceil(count / args.pageSize)
    }
  };
}

// Get movies by title
async function searchMoviesTitle(args: { title: string } & PaginationParams) {
  const titleFilter = { Series_Title: { $regex: new RegExp(args.title, 'i') } };
  const count = await movieModel.countDocuments(titleFilter);

  const movies = await movieModel
    .find(titleFilter)
    .limit(args.pageSize)
    .skip((args.currentPage - 1) * args.pageSize);

  return {
    data: movies,
    pageInfo: {
      pageSize: args.pageSize,
      currentPage: args.currentPage,
      totalPages: Math.ceil(count / args.pageSize)
    }
  };
}

// Get movies by actors
async function searchMoviesByActors(args: { actor: string } & PaginationParams) {
  const actorFilter = {
    $or: [
      { Star1: { $regex: new RegExp(args.actor, 'i') } },
      { Star2: { $regex: new RegExp(args.actor, 'i') } },
      { Star3: { $regex: new RegExp(args.actor, 'i') } },
      { Star4: { $regex: new RegExp(args.actor, 'i') } }
    ]
  };
  const count = await movieModel.countDocuments(actorFilter);

  const movies = await movieModel
    .find(actorFilter)
    .limit(args.pageSize)
    .skip((args.currentPage - 1) * args.pageSize);

  return {
    data: movies,
    pageInfo: {
      pageSize: args.pageSize,
      currentPage: args.currentPage,
      totalPages: Math.ceil(count / args.pageSize)
    }
  };
}

// Get movies by genre
async function searchMoviesByGenres(args: { genre: string } & PaginationParams) {
  const genreFilter = { Genre: args.genre };
  const count = await movieModel.countDocuments(genreFilter);

  const movies = await movieModel
    .find(genreFilter)
    .limit(args.pageSize)
    .skip((args.currentPage - 1) * args.pageSize);
  return {
    data: movies,
    pageInfo: {
      pageSize: args.pageSize,
      currentPage: args.currentPage,
      totalPages: Math.ceil(count / args.pageSize)
    }
  };
}

// Set status of a movie to watched
async function toggleWatched(args: { id: string }) {
  // https://stackoverflow.com/questions/67361357/how-do-i-update-a-boolean-field-to-its-opposite-in-mongoose
  return await movieModel.findByIdAndUpdate(args.id, [{ $set: { Watched: { $eq: [false, '$Watched'] } } }]);
}
async function getGenres() {
  const genres = await movieModel.find().distinct('Genre');

  return genres;
}

// Set status of a movie to watched
async function setWatched(args: { id: string }) {
  const filter = { _id: args.id };
  const update = { Watched: true };
  let movie = await movieModel.findOneAndUpdate(filter, update);
  movie = await movieModel.findOne(filter);

  return await movie?.save();
}
/* A resolver is used to say what will be RETURNED for each schema element */
const resolver = {
  movies: getMovies,
  getMoviesByTitle: searchMoviesTitle,
  getMoviesByActors: searchMoviesByActors,
  getMoviesByGenre: searchMoviesByGenres,
  toggleWatched: toggleWatched,
  genres: getGenres
};

export default resolver;
