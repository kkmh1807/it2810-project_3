import { buildSchema } from 'graphql';

// Default values in backend, should be changed by frontend.
// Pagesize - num of results per page
// For each new page, skip current page -1 * pageSize.
const pageSize: number = 10;
const currentPage: number = 1;

/* A schema is used to define how the data will look */
const schema = buildSchema(`
  type Movie {
    Poster_Link: String!
    Series_Title: String!
    Released_Year: Int
    Certificate: String!
    Runtime: String!
    Genre: String!
    IMDB_Rating: Float!
    Overview: String!
    Meta_score: Int
    Director: String!
    Star1: String!
    Star2: String!
    Star3: String!
    Star4: String!
    No_of_Votes: Int!
    Gross: Int!
    _id: ID!
  }

  type Query {
    movies(pageSize:Int = ${pageSize}, currentPage:Int = ${currentPage}): MovieResponse!
    getMoviesByTitle(title: String, limit:Int, page:Int): [Movie]
    getMoviesByActors(actor: String, limit:Int, page:Int): [Movie]
    getMoviesByGenre(genre: String, limit:Int, page:Int): [Movie]
  }

  schema {
    query: Query
  }

  type PageInfo {
    pageSize: Int!
    currentPage: Int!
    totalPages: Int!
  }

  type MovieResponse {
    data: [Movie]!
    pageInfo: PageInfo!
  }
`);

export default schema;
