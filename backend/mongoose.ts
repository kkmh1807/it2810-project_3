import mongoose, { Schema, ObjectId } from "mongoose";

interface Movie {
  Poster_Link: String;
  Series_Title: String;
  Released_Year: Number;
  Certificate: String;
  Runtime: String;
  Genre: String;
  IMDB_Rating: Number;
  Overview: String;
  Meta_score: Number;
  Director: String;
  Star1: String;
  Star2: String;
  Star3: String;
  Star4: String;
  No_of_Votes: Number;
  Gross: Number;
}

export const movieSchema = new Schema<Movie>({
  Poster_Link: {
    type: String,
    required: true,
  },
  Series_Title: {
    type: String,
    required: true,
  },
  Released_Year: {
    type: Date,
    required: true,
  },
  Certificate: {
    type: String,
    required: true,
  },
  Runtime: {
    type: String,
    required: true,
  },
  Genre: {
    type: String,
    required: true,
  },
  IMDB_Rating: Number,
  Overview: {
    type: String,
    required: true,
  },
  Meta_score: {
    type: Number,
  },
  Director: {
    type: String,
    required: true,
  },
  Star1: {
    type: String,
    required: true,
  },
  Star2: {
    type: String,
    required: true,
  },
  Star3: {
    type: String,
    required: true,
  },
  Star4: {
    type: String,
    required: true,
  },
  No_of_Votes: {
    type: Number,
    required: true,
  },
  Gross: {
    type: Number,
    required: true,
  },
});

export default mongoose.model<Movie>("Movie", movieSchema);
