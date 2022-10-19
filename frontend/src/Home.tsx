import React from 'react';
import { useRecoilValue } from 'recoil';
import { getAllMovies } from './recoil/selectors';
import './styles/HomeLogo.css';

const Home = () => {
  const movies = useRecoilValue(getAllMovies);

  return (
    <>
      <div className="home-logo">
        <img src="assets/Icon.svg" alt="MovieFinder logo" />
        <h1>MovieFinder</h1>
        <h2>Find your movie!</h2>
      </div>
      {movies.map((movie) => (
        <div key={movie._id}>
          <div>{movie.Series_Title}</div>
          <img src={movie.Poster_Link} onError={(e) => (e.currentTarget.src = 'assets/imdb_logo.svg')} />
        </div>
      ))}
    </>
  );
};

export default Home;
