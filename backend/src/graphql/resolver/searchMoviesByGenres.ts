import movieModel from '../../models/movie';
import PaginationParams from '../../models/paginationParams';
import { calcPageInfo } from '../../utils';

// Get movies by genre
export async function searchMoviesByGenres(args: { genre: string; order: boolean } & PaginationParams) {
  const genreFilter = { Genre: args.genre };
  const count = await movieModel.countDocuments(genreFilter);
  const pageInfo = calcPageInfo(args.pageSize, args.currentPage, count);
  // If true, it should be ASC, If false, sort DESC.
  const isSorted = args.order ? 1 : -1;
  const movies = await movieModel
    .find(genreFilter)
    .sort({
      IMDB_Rating: isSorted
    })
    .limit(args.pageSize)
    .skip((args.currentPage - 1) * args.pageSize);
  return {
    data: movies,
    pageInfo
  };
}
