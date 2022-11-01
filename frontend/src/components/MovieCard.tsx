import { useState } from 'react';
import { Movie } from '../types';
import ExpandMore from '../assets/expand_more.svg';
import ExpandLess from '../assets/expand_less.svg';
import Eye from './Eye';
import IMDB_logo from '../assets/imdb_logo.svg';
import { useRecoilValue } from 'recoil';
import { queryState } from '../recoil/atoms';
import '../styles/MovieCard.css';
import '../styles/Media.css';

const MovieCard = (props: { movie: Movie }) => {
  const [open, setopen] = useState(false);

  const query = useRecoilValue(queryState);

  const toggleOpen = () => {
    setopen(!open);
  };

  const matchingActor = () => {
    const matchedActor = Object.entries(props.movie).find(([key, val]) => key.match(/Star/) && val.match(new RegExp(query.value, 'i')))?.[1];
    return matchedActor || props.movie.Star1;
  };

  return (
    <div className="card-container">
      <div className="movie-card" onClick={toggleOpen} onKeyDown={(e) => e.key === 'Enter' && toggleOpen()} key={props.movie._id} tabIndex={0}>
        <img id="poster" src={props.movie.Poster_Link} onError={(e) => (e.currentTarget.src = IMDB_logo)} />
        <div id="title">{props.movie.Series_Title}</div>
        <div id="genre">{props.movie.Genre}</div>
        <div id="rating">{props.movie.IMDB_Rating}</div>
        <div id="drpdwn">{open ? <img src={ExpandLess} alt="" /> : <img src={ExpandMore} alt="" />}</div>
        {open ? <div></div> : <div id="star">{matchingActor()}</div>}
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
