import movieModel from '../../models/movie';
import PaginationParams from '../../models/paginationParams';
import { calcPageInfo } from '../../utils';

export async function getMovies(args: PaginationParams) {
  const count = await movieModel.countDocuments();
  const pageInfo = calcPageInfo(args.pageSize, args.currentPage, count);
  const movies = await movieModel
    .find()
    .limit(args.pageSize)
    .skip((args.currentPage - 1) * args.pageSize);

  return {
    data: movies,
    pageInfo
  };
}
