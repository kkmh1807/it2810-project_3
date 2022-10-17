import express from 'express';
import mongoose from 'mongoose';
import { graphqlHTTP } from 'express-graphql';
import { schema, resolver } from './graphql';

const DB_URI = `mongodb://localhost:27017/imdb_movies`;
const PORT = 4000;

/* We tie it all together with express, so a user can access the endpoint */
const app = express();
app.use(
  '/api',
  graphqlHTTP({
    schema: schema,
    rootValue: resolver,
    graphiql: true
  })
);

mongoose
  .connect(DB_URI)
  .then(() => {
    app.listen(PORT);
    // eslint-disable-next-line no-console
    console.log(`App running on port ${PORT}`);
  })
  .catch((error) => {
    throw error;
  });
