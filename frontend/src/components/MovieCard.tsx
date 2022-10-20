import React from 'react';
import { Movie } from '../types';
import '../styles/MovieCard.css';

const MovieCard = (props: { movie: Movie }) => {
  return (
    <div className="movie-card" key={props.movie._id}>
      <img id="poster" src={props.movie.Poster_Link} onError={(e) => (e.currentTarget.src = 'assets/imdb_logo.svg')} />
      <div id="title">{props.movie.Series_Title}</div>
      <div id="genre">{props.movie.Genre}</div>
      <div id="star">{props.movie.Star1}</div>
      <div id="rating">{props.movie.IMDB_Rating}</div>
    </div>
  );
};
export default MovieCard;
