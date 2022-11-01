import movieModel from '../../models/movie';
import PaginationParams from '../../models/paginationParams';
import { calcPageInfo } from '../../utils';

export async function getMovies(args: { order: boolean } & PaginationParams) {
  const count = await movieModel.countDocuments();
  const pageInfo = calcPageInfo(args.pageSize, args.currentPage, count);
  const isSorted = args.order ? 1 : -1;
  const movies = await movieModel
    .find()
    .sort({ IMDB_Rating: isSorted })
    .limit(args.pageSize)
    .skip((args.currentPage - 1) * args.pageSize);

  return {
    data: movies,
    pageInfo
  };
}
