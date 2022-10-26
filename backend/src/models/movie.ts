import { model, Schema } from 'mongoose';

export interface Movie {
  Poster_Link: string;
  Series_Title: string;
  Released_Year?: number;
  Certificate: string;
  Runtime: string;
  Genre: string;
  IMDB_Rating: number;
  Overview: string;
  Meta_score?: number;
  Director: string;
  Star1: string;
  Star2: string;
  Star3: string;
  Star4: string;
  No_of_Votes: number;
  Gross: number;
  Watched: boolean;
}

export const movieSchema = new Schema<Movie>({
  Poster_Link: {
    type: String,
    required: true
  },
  Series_Title: {
    type: String,
    required: true
  },
  Released_Year: Number,
  Certificate: {
    type: String,
    required: true
  },
  Runtime: {
    type: String,
    required: true
  },
  Genre: {
    type: String,
    required: true
  },
  IMDB_Rating: {
    type: Number,
    required: true
  },
  Overview: {
    type: String,
    required: true
  },
  Meta_score: Number,
  Director: {
    type: String,
    required: true
  },
  Star1: {
    type: String,
    required: true
  },
  Star2: {
    type: String,
    required: true
  },
  Star3: {
    type: String,
    required: true
  },
  Star4: {
    type: String,
    required: true
  },
  No_of_Votes: {
    type: Number,
    required: true
  },
  Gross: {
    type: Number,
    required: true
  },
  Watched: {
    type: Boolean,
    default: false
  }
});

export default model<Movie>('Movie', movieSchema);
