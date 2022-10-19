import React from 'react';
import { useRecoilValue } from 'recoil';
import Pagination from './components/Pagination';
import SearchBar from './components/SearchBar';
import { searchMovies } from './recoil/selectors';
import './styles/Home.css';
// TODO: Logo and logo-styling to own component?
import './styles/HomeLogo.css';

const Home = () => {
  const movies = useRecoilValue(searchMovies);

  return (
    <>
      <header className="home-header">
        <div className="home-logo">
          <img src="assets/Icon.svg" alt="MovieFinder logo" />
          <h1>MovieFinder</h1>
          <h2>Find your movie!</h2>
        </div>
        <SearchBar />
      </header>
      <main className="home-content">
        {movies?.data.map((movie) => (
          <div key={movie._id}>
            <div>{movie.Series_Title}</div>
            <img src={movie.Poster_Link} onError={(e) => (e.currentTarget.src = 'assets/imdb_logo.svg')} />
          </div>
        ))}
      </main>
      <Pagination totalPages={movies?.pageInfo.totalPages || 0} />
    </>
  );
};

export default Home;
