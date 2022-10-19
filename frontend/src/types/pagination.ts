import { Movie } from './movie';

export interface PageInfo {
  currentPage: number;
  totalPages: number;
  pageSize: number;
}

export interface MovieResponse {
  data: Movie[];
  pageInfo: PageInfo;
}
