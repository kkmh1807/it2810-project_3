import movieModel from '../../models/movie';
import PaginationParams from '../../models/paginationParams';
import { calcPageInfo } from '../../utils';

// Get movies by genre
export async function searchMoviesByGenres(args: { genre: string } & PaginationParams) {
  const genreFilter = { Genre: args.genre };
  const count = await movieModel.countDocuments(genreFilter);
  const pageInfo = calcPageInfo(args.pageSize, args.currentPage, count);

  const movies = await movieModel
    .find(genreFilter)
    .limit(args.pageSize)
    .skip((args.currentPage - 1) * args.pageSize);
  return {
    data: movies,
    pageInfo
  };
}
