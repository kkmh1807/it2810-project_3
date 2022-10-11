import express from "express";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";
import mongoose from "mongoose";

/* A schema is used to define how the data will look */
let schema = buildSchema(`
  type Query {
    title: String,
    age: Int,
    description: String
  }
`);

/* A root value is used to say what will be RETURNED for each schema element */
let root = {
  title: () => {
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
app.get(
  "/api",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

const uri = `mongodb://localhost:27017/IMDB_Movies`;
const options = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose
  .connect(uri)
  .then(() => {
    app.listen(4000), console.log("App running");
  })
  .catch((error) => {
    throw error;
  });
