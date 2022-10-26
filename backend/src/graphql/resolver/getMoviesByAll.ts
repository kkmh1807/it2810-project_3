import PaginationParams from '../../models/paginationParams';
import movieModel from '../../models/movie';

// Get movies by any field
export async function getMoviesByAll(args: { query: string } & PaginationParams) {
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

  const count = await movieModel.countDocuments(filter);
  const movies = await movieModel
    .find(filter)
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
