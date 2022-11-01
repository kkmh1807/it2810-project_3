import PaginationParams from '../../models/paginationParams';
import movieModel from '../../models/movie';
import { calcPageInfo } from '../../utils';

// Get movies by any field
export async function searchMoviesByAll(args: { query: string; order: boolean } & PaginationParams) {
  const queryRegex = new RegExp(args.query, 'i');

  const filter = {
    $or: [
      { Series_Title: { $regex: queryRegex } },
      { Genre: { $regex: queryRegex } },
      { Star1: { $regex: queryRegex } },
      { Star2: { $regex: queryRegex } },
      { Star3: { $regex: queryRegex } },
      { Star4: { $regex: queryRegex } }
    ]
  };
  // If true, it should be ASC, If false, sort DESC.
  const isSorted = args.order ? 1 : -1;

  const movies = await movieModel
    .find(filter)
    .sort({
      IMDB_Rating: isSorted
    })
    .limit(args.pageSize)
    .skip((args.currentPage - 1) * args.pageSize);
  const count = await movieModel.countDocuments(filter);
  const pageInfo = calcPageInfo(args.pageSize, args.currentPage, count);

  return {
    data: movies,
    pageInfo
  };
}
