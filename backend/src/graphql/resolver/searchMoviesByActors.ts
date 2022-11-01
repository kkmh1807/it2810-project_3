import movieModel from '../../models/movie';
import PaginationParams from '../../models/paginationParams';
import { calcPageInfo } from '../../utils';

// Get movies by actors
export async function searchMoviesByActors(args: { actor: string; order: boolean } & PaginationParams) {
  const actorFilter = {
    $or: [
      { Star1: { $regex: new RegExp(args.actor, 'i') } },
      { Star2: { $regex: new RegExp(args.actor, 'i') } },
      { Star3: { $regex: new RegExp(args.actor, 'i') } },
      { Star4: { $regex: new RegExp(args.actor, 'i') } }
    ]
  };
  const count = await movieModel.countDocuments(actorFilter);
  const pageInfo = calcPageInfo(args.pageSize, args.currentPage, count);
  // If true, it should be ASC, If false, sort DESC.
  const isSorted = args.order ? 1 : -1;
  const movies = await movieModel
    .find(actorFilter)
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
