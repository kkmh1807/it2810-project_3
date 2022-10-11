import Movies from "./mongoose";

export default {
  movies: async () => {
    const movies = await Movies.find();
    return movies.map((movie) => movie.toJSON());
  },
};
