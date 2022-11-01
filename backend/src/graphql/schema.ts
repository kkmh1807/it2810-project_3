import { buildSchema } from 'graphql';

// Default values in backend, should be changed by frontend.
// Pagesize - num of results per page
// For each new page, skip current page -1 * pageSize.
const pageSize = 10;
const currentPage = 1;

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
    Watched: Boolean
  }

  type Query {
    movies(pageSize:Int = ${pageSize}, order: Boolean, currentPage:Int = ${currentPage}): MovieResponse!

    getMoviesByAll(query: String, order: Boolean, pageSize:Int = ${pageSize}, currentPage:Int = ${currentPage}): MovieResponse
    getMoviesByTitle(title: String, order: Boolean, pageSize:Int = ${pageSize}, currentPage:Int = ${currentPage} ): MovieResponse
    getMoviesByActors(actor: String, order: Boolean, pageSize:Int = ${pageSize}, currentPage:Int = ${currentPage}): MovieResponse
    getMoviesByGenre(genre: String, order: Boolean, pageSize:Int = ${pageSize}, currentPage:Int = ${currentPage}): MovieResponse

    genres: [String]!
  }

  schema {
    query: Query
    mutation: Mutation
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

  type Mutation {
    toggleWatched(id: String, watched: Boolean): Movie
  }
`);

export default schema;
