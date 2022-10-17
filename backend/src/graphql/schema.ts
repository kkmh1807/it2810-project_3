import { buildSchema } from 'graphql';

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
    movies:[Movie!]
    getMoviesByTitle(title: String): [Movie]
    getMoviesByActors(Star1:String, Star2:String, Star3: String, Star4: String): [Movie]
    getMoviesByGenre(genre: String): [Movie]
  }

  schema {
    query: Query
  }
`);

export default schema;
