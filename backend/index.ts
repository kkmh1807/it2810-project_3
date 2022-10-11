import express from "express";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";
import resolver from "./resolver";
import mongoose from "mongoose";

/* A schema is used to define how the data will look */
let schema = buildSchema(`
  type Movie {
    Poster_Link: String!
    Series_Title: String!
    Released_Year: Int!
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
  }

  schema {
    query: Query
  }
`);

/* A root value is used to say what will be RETURNED for each schema element */
let root = {
  Poster_Link: () => {
    return "Fjolt";
  },
  age: () => {
    return 5;
  },
  description: () => {
    return "A website";
  },
};

/* We tie it all together with express, so a user can access the endpoint */
let app = express();
app.use(
  "/api",
  graphqlHTTP({
    schema: schema,
    rootValue: resolver,
    graphiql: true,
  })
);

const uri = `mongodb://localhost:27017/imdb_movies`;
const options = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose
  .connect(uri)
  .then(() => {
    app.listen(4000), console.log("App running");
  })
  .catch((error) => {
    throw error;
  });
