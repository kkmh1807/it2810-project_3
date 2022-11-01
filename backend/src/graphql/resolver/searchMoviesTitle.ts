import movieModel from '../../models/movie';
import PaginationParams from '../../models/paginationParams';
import { calcPageInfo } from '../../utils';

// Get movies by title
export async function searchMoviesTitle(args: { title: string; order: boolean } & PaginationParams) {
  const titleFilter = { Series_Title: { $regex: new RegExp(args.title, 'i') } };
  const count = await movieModel.countDocuments(titleFilter);
  const pageInfo = calcPageInfo(args.pageSize, args.currentPage, count);

  // If true, it should be ASC, If false, sort DESC.
  const isSorted = args.order ? 1 : -1;

  const movies = await movieModel
    .find(titleFilter)
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
