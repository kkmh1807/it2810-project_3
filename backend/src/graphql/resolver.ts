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
  const count = await movieModel.countDocuments();

  const movies = await movieModel
    .find({ Series_Title: { $regex: new RegExp(args.title, 'i') } })
    .limit(args.pageSize)
    .skip((args.currentPage - 1) * args.pageSize);

  return movies;
}

// Get movies by actors
async function searchMoviesByActors(args: { actor: string } & PaginationParams) {
  const count = await movieModel.countDocuments();

  const movies = await movieModel
    .find({
      $or: [
        { Star1: { $regex: new RegExp(args.actor, 'i') } },
        { Star2: { $regex: new RegExp(args.actor, 'i') } },
        { Star3: { $regex: new RegExp(args.actor, 'i') } },
        { Star4: { $regex: new RegExp(args.actor, 'i') } }
      ]
    })
    .limit(args.pageSize)
    .skip((args.currentPage - 1) * args.pageSize);
  return movies;
}

// Get movies by genre
async function searchMoviesByGenres(args: { genre: string } & PaginationParams) {
  const count = await movieModel.countDocuments();

  const movies = await movieModel
    .find({ Genre: args.genre })
    .limit(args.pageSize)
    .skip((args.currentPage - 1) * args.currentPage);
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
