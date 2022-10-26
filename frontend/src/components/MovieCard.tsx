import React, { useState } from 'react';
import { Movie } from '../types';
import '../styles/MovieCard.css';
import ExpandMore from '../assets/expand_more.svg';
import ExpandLess from '../assets/expand_less.svg';
import Eye from './Eye';

const MovieCard = (props: { movie: Movie }) => {
  const [open, setopen] = useState(false);

  const toggleOpen = () => {
    setopen(!open);
  };

  return (
    <div className="card-container">
      <div className="movie-card" onClick={toggleOpen} key={props.movie._id}>
        <img id="poster" src={props.movie.Poster_Link} onError={(e) => (e.currentTarget.src = 'assets/imdb_logo.svg')} />
        <div id="title">{props.movie.Series_Title}</div>
        <div id="genre">{props.movie.Genre}</div>
        <div id="rating">{props.movie.IMDB_Rating}</div>
        <div id="drpdwn">{open ? <img src={ExpandLess} alt="" /> : <img src={ExpandMore} alt="" />}</div>
        {open ? <div></div> : <div id="star">{props.movie.Star1}</div>}
      </div>
      {open ? (
        <div className="drpdwn-card">
          <div id="info">
            <h3>Overview</h3> <br />
            {props.movie.Overview}
          </div>
          <div id="stars">
            <h3>Starring</h3>
            <p>{props.movie.Star1}</p>
            <p>{props.movie.Star2}</p>
            <p>{props.movie.Star3}</p>
            <p>{props.movie.Star4}</p>
          </div>
          <Eye watched={props.movie.Watched} movieId={props.movie._id} />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
export default MovieCard;
